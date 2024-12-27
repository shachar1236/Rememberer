<script>
    import QuestionSetCrad from "./lib/QuestionSetCrad.svelte";
    import MainPage from "./pages/MainPage.svelte";
    import QuestionSetPage from "./pages/QuestionSetPage.svelte";

    let QuestionSets = [];

    fetch("QuestionSets/sets.txt").then((response) => {
        response.text().then((text) => {
            let setsList = text.toString().split("\n");

            setsList.forEach((file) => {
                fetch("QuestionSets/" + file).then((r) => {
                    r.json().then((val) => {
                        QuestionSets = [...QuestionSets, val]
                    })
                })
            })
            
        })
    })


    let currentPage = "main";
    let current_question_set;

    function OnQuestionSetClick(question_set) {
        console.log("clicked");
        current_question_set = JSON.parse(JSON.stringify(question_set));
        currentPage = "question_set";
    }
</script>

<main>
    {#if currentPage == "main"}
        <MainPage {QuestionSets} {OnQuestionSetClick}></MainPage>
    {:else if currentPage == "question_set"}
        <QuestionSetPage question_set={current_question_set}></QuestionSetPage>
    {/if}
</main>

<!-- https://coolors.co/palette/ff595e-ffca3a-8ac926-1982c4-6a4c93 -->
<style></style>
