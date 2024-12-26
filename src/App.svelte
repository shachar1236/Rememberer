<script>
    import QuestionSetCrad from "./lib/QuestionSetCrad.svelte";
    import MainPage from "./pages/MainPage.svelte";
    import QuestionSetPage from "./pages/QuestionSetPage.svelte";

    let q_set1 = {
        name: "Capitol citys",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
        config: {
            learning_rate: 2.0,
            music: true,
        },
        questions: [
            {
                id: 0,
                question: "What is the capital of France?",
                answer: "Paris",
                wrong_answers: ["London", "Berlin", "Madrid"],
            },
            {
                id: 1,
                question: "What is the capital of Germany?",
                answer: "Berlin",
                wrong_answers: ["Vienna", "Prague", "Amsterdam"],
            },
            {
                id: 2,
                question: "What is the capital of Spain?",
                answer: "Madrid",
                wrong_answers: ["Lisbon", "Rome", "Barcelona"],
            },
            {
                id: 3,
                question: "What is the capital of Italy?",
                answer: "Rome",
                wrong_answers: ["Milan", "Venice", "Naples"],
            },
            {
                id: 4,
                question: "What is the capital of Japan?",
                answer: "Tokyo",
                wrong_answers: ["Seoul", "Beijing", "Shanghai"],
            },
            {
                id: 5,
                question: "What is the capital of Canada?",
                answer: "Ottawa",
                wrong_answers: ["Toronto", "Vancouver", "Montreal"],
            },
            {
                id: 6,
                question: "What is the capital of Australia?",
                answer: "Canberra",
                wrong_answers: ["Sydney", "Melbourne", "Brisbane"],
            },
            {
                id: 7,
                question: "What is the capital of India?",
                answer: "New Delhi",
                wrong_answers: ["Mumbai", "Bangalore", "Kolkata"],
            },
            {
                id: 8,
                question: "What is the capital of Brazil?",
                answer: "Brasília",
                wrong_answers: ["Rio de Janeiro", "São Paulo", "Salvador"],
            },
            {
                id: 9,
                question: "What is the capital of Russia?",
                answer: "Moscow",
                wrong_answers: ["Saint Petersburg", "Kazan", "Sochi"],
            },
            {
                id: 10,
                question: "What is the capital of the United States?",
                answer: "Washington, D.C.",
                wrong_answers: ["New York", "Los Angeles", "Chicago"],
            },
            {
                id: 11,
                question: "What is the capital of China?",
                answer: "Beijing",
                wrong_answers: ["Shanghai", "Guangzhou", "Shenzhen"],
            },
            {
                id: 12,
                question: "What is the capital of South Africa?",
                answer: "Pretoria",
                wrong_answers: ["Cape Town", "Johannesburg", "Durban"],
            },
            {
                id: 13,
                question: "What is the capital of Mexico?",
                answer: "Mexico City",
                wrong_answers: ["Guadalajara", "Monterrey", "Cancún"],
            },
            {
                id: 14,
                question: "What is the capital of South Korea?",
                answer: "Seoul",
                wrong_answers: ["Busan", "Incheon", "Daegu"],
            },
        ],
    };
    let q_set2 = {
        name: "Countries continents",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg/1920px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg",
        config: {
            learning_rate: 2.0,
            music: true,
        },
        questions: [
            {
                id: 0,
                question: "What continent is Canada located in?",
                answer: "North America",
                wrong_answers: ["Europe", "Asia", "Africa"],
            },
            {
                id: 1,
                question: "What continent is Brazil located in?",
                answer: "South America",
                wrong_answers: ["North America", "Africa", "Asia"],
            },
            {
                id: 2,
                question: "What continent is Germany located in?",
                answer: "Europe",
                wrong_answers: ["Asia", "Africa", "South America"],
            },
            {
                id: 3,
                question: "What continent is Australia located in?",
                answer: "Australia",
                wrong_answers: ["Asia", "Africa", "Europe"],
            },
            {
                id: 4,
                question: "What continent is Egypt located in?",
                answer: "Africa",
                wrong_answers: ["Asia", "Europe", "South America"],
            },
            {
                id: 5,
                question: "What continent is China located in?",
                answer: "Asia",
                wrong_answers: ["Europe", "Africa", "North America"],
            },
            {
                id: 6,
                question: "What continent is Argentina located in?",
                answer: "South America",
                wrong_answers: ["Africa", "North America", "Europe"],
            },
            {
                id: 7,
                question: "What continent is India located in?",
                answer: "Asia",
                wrong_answers: ["Europe", "Africa", "Australia"],
            },
            {
                id: 8,
                question: "What continent is Nigeria located in?",
                answer: "Africa",
                wrong_answers: ["Asia", "Europe", "North America"],
            },
            {
                id: 9,
                question: "What continent is Italy located in?",
                answer: "Europe",
                wrong_answers: ["Asia", "Africa", "Australia"],
            },
            {
                id: 10,
                question: "What continent is Russia located in?",
                answer: "Europe and Asia",
                wrong_answers: ["North America", "Africa", "South America"],
            },
            {
                id: 11,
                question: "What continent is Japan located in?",
                answer: "Asia",
                wrong_answers: ["Europe", "Australia", "North America"],
            },
            {
                id: 12,
                question: "What continent is South Africa located in?",
                answer: "Africa",
                wrong_answers: ["Asia", "South America", "Europe"],
            },
            {
                id: 13,
                question: "What continent is Mexico located in?",
                answer: "North America",
                wrong_answers: ["South America", "Europe", "Asia"],
            },
            {
                id: 14,
                question: "What continent is Saudi Arabia located in?",
                answer: "Asia",
                wrong_answers: ["Africa", "Europe", "Australia"],
            },
        ],
    };
    let QuestionSets = [q_set1, q_set2];

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
