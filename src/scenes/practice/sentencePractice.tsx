import React from "react";
import { useEffect, useState } from "react";
import { RootState } from "src/redux/store";
import { useSelector, useDispatch } from "react-redux";
import Keyboard from "src/components/keyboard";
import { reset } from "src/redux/generatedSentenceSlice";
import { generateSentence } from "src/redux/generatedSentenceSlice";
import { ClipLoader } from "react-spinners";
import TagsInput from "react-tagsinput";
import { spawn } from "child_process";

function SentencePractice() {
    const dispatch = useDispatch();

    const [generatedSentenceLoading, setGeneratedSentenceLoading] =
        useState(true);
    const [keywords, setKeywords] = useState([]);

    const generatedSentence = useSelector(
        (state: RootState) => state.generatedSentence.value
    );
    const feedback = useSelector(
        (state: RootState) => state.generatedSentence.feedback
    );
    const total = useSelector(
        (state: RootState) => state.generatedSentence.total
    );
    const correct = useSelector(
        (state: RootState) => state.generatedSentence.correct
    );
    const currentIndex = useSelector(
        (state: RootState) => state.generatedSentence.currentIndex
    );
    const currentTyped = useSelector(
        (state: RootState) => state.generatedSentence.currentTyped
    );
    const correctChars = useSelector(
        (state: RootState) => state.generatedSentence.correctChars
    );

    const accuracyReducer = (accumulator: number, currentValue: boolean) => {
        if (currentValue === true) {
            return accumulator + 1;
        } else {
            return accumulator;
        }
    };
    const init = async () => {
        dispatch(reset());
        setGeneratedSentenceLoading(true);
        const queryOptions = {
            method: "POST",
            headers: {
                accept: "application/json",
                apikey: "gKo3Zni7O5dwYMD0aPWyQw",
                "Client-Agent": "unknown:0:unknown",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: `generate text atleast 2 sentences long with the following keywords: ${keywords.join(
                    " "
                )}`,
                params: {
                    n: 1,
                    frmtadsnsp: false,
                    frmtrmblln: false,
                    frmtrmspch: false,
                    frmttriminc: false,
                    max_context_length: 1024,
                    max_length: 200,
                    rep_pen: 3,
                    rep_pen_range: 4096,
                    rep_pen_slope: 10,
                    singleline: false,
                    temperature: 0.5,
                    tfs: 0.2,
                    top_a: 1,
                    top_k: 100,
                    top_p: 1,
                    typical: 1,
                    use_default_badwordsids: true,
                },
                softprompt: "string",
                trusted_workers: false,
                slow_workers: true,
                workers: [
                    "2915b12b-4aed-46c7-95d4-c343c6e7dbf3",
                    "e72ab6ba-45a0-4988-aec2-6f0f9adb5ac4",
                ],
                worker_blacklist: false,
                models: ["tgi-fp16-8k/Undi95/MLewd-L2-13B-v2-3"],
                dry_run: false,
            }),
        };

        const generationOptions = {
            method: "GET",
            headers: {
                accept: "application/json",
                "Client-Agent": "unknown:0:unknown",
            },
        };

        const res = await fetch(
            "https://stablehorde.net/api/v2/generate/text/async",
            queryOptions
        );
        const resParsed = await res.json();
        console.log(resParsed);
        console.log(resParsed.id);
        console.log(JSON.parse(queryOptions.body));
        let generationRes = await fetch(
            `https://stablehorde.net/api/v2/generate/text/status/${resParsed.id}`,
            generationOptions
        );
        let generationResParsed = await generationRes.json();
        let finished = generationResParsed.finished;
        while (!finished) {
            generationRes = await fetch(
                `https://stablehorde.net/api/v2/generate/text/status/${resParsed.id}`,
                generationOptions
            );
            generationResParsed = await generationRes.json();
            finished = generationResParsed.finished;
        }
        console.log(generationResParsed);
        dispatch(generateSentence(generationResParsed.generations[0].text));
        setGeneratedSentenceLoading(false);
    };
    useEffect(() => {
        init();
    }, []);

    return (
        <div className="h-[calc(100vh-3rem)] flex flex-col justify-between items-center p-10 bg-primary-light">
            <div className="flex flex-col justify-stretch items-center gap-3 w-2/3">
                <span className="bg-secondary py-3 px-12 border border-primary rounded-2xl text-3xl w-full">
                    Welcome to Sentence practice !
                </span>
                <div className="flex">
                    <span className="bg-secondary p-3 border border-primary rounded-2xl">
                        Accuracy:{" "}
                        {[...currentTyped].length > 0 &&
                            correctChars.reduce(accuracyReducer, 0) /
                                [...currentTyped].length}
                        {[...currentTyped].length === 0 && 0}
                    </span>
                </div>
                <div className="flex flex-col">
                    <span>
                        Write some keywords to help generate suitable text
                    </span>
                    <div className="flex gap-2">
                        <div className="grow">
                            <TagsInput
                                value={keywords}
                                onChange={(tags: string[]) => setKeywords(tags)}
                            />
                        </div>
                        <button
                            className="bg-secondary py-2 px-3 border border-primary rounded-2xl"
                            onClick={() => init()}
                        >
                            <span>Generate</span>
                        </button>
                    </div>
                </div>
                <div className="flex gap-2 w-full justify-center">
                    <span className="flex justify-center flex-wrap bg-secondary min-h-fit max-h-80 p-2 border border-primary rounded-2xl text-3xl w-full">
                        <span className="w-full h-full p-2 overflow-y-scroll">
                            {generatedSentenceLoading ? (
                                <span className="flex justify-center">
                                <ClipLoader
                                    color={"#900C3F"}
                                    loading={generatedSentenceLoading}
                                    size={40}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                />
                                </span>

                            ) : (
                                <>
                                    {[...generatedSentence]
                                        .slice(0, currentIndex)
                                        .map((char, index) => (
                                            <span
                                                className={`${
                                                    correctChars[index] === true
                                                        ? "bg-green-500"
                                                        : "bg-red-500"
                                                }`}
                                            >
                                                {char}
                                            </span>
                                        ))}
                                    {[...generatedSentence]
                                        .slice(
                                            currentIndex,
                                            generatedSentence.length
                                        )
                                        .map((char, index) => (
                                            <span>{char}</span>
                                        ))}
                                </>
                            )}
                        </span>
                    </span>
                </div>
            </div>

            <div className="p-12">
                <Keyboard />
            </div>
        </div>
    );
}

export default SentencePractice;
