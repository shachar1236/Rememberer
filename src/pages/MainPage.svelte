<script>
    import QuestionSetCrad from "../lib/QuestionSetCrad.svelte";

    export let QuestionSets;
    export let OnQuestionSetClick;
</script>

<div class="w-[100vw] flex justify-center">
    <div>
        <h1 class="font-medium text-3xl">Welcome to Remeberer</h1>
        <h3 class="m-5 text-l">Use can use this website to make your brain remeberer things</h3>
        <div class="flex m-8">
            {#each QuestionSets as q_set}
                <QuestionSetCrad question_set={q_set} onclickfunc={() => OnQuestionSetClick(q_set)}></QuestionSetCrad>
            {/each}
        </div>
    </div>
</div>

<style></style>