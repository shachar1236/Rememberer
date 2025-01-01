<script>
    import QuestionSetCrad from "../lib/QuestionSetCrad.svelte";
    import { collection, getAggregateFromServer, getDocs, getFirestore, query, sum, where } from "firebase/firestore";
    import { firebase_app, user } from "../shared/shared";
    import { max_score } from "../helpers/question";

    export let QuestionSets;
    export let OnQuestionSetClick;

    function speak() {
        var msg = new SpeechSynthesisUtterance();
        msg.text = "Hello World";
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(msg);
    }


    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore($firebase_app);

    async function getProgress(question_set) {
        if ($user) {
            const q_doc = collection(db, "game_scores", $user.uid.toString(), question_set.name);
            const snapshot = await getAggregateFromServer(q_doc, {
                totalScore: sum('score')
            });
            let totalScore = snapshot.data().totalScore;
            return (totalScore / (max_score * question_set.questions.length)) * 100; 
        } else {
            return 0;
        }
    }
</script>

<div class="w-[100vw] flex justify-center">
    <div>
        <h1 class="font-medium text-3xl">Welcome to Remeberer</h1>
        <h3 class="m-5 text-l">Use can use this website to make your brain remeberer things</h3>
        <div class="flex m-8 flex-col md:flex-row">
            {#each QuestionSets as q_set}
                {#await getProgress(q_set) then p}
                    <QuestionSetCrad question_set={q_set} progress_bar={p} onclickfunc={() => OnQuestionSetClick(q_set)}></QuestionSetCrad>
                {/await}
            {/each}
        </div>
    </div>
</div>

<button onclick="{speak}">hiiiiii</button>

<style></style>