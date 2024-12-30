<script>
    import QuestionSetCrad from "./lib/QuestionSetCrad.svelte";
    import MainPage from "./pages/MainPage.svelte";
    import QuestionSetPage from "./pages/QuestionSetPage.svelte";

    import { user, page, firebase_app, firebase_analytics } from "./shared/shared";

    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyAYhCkl8BqHUG4bJb1H2PN4hFHGKDlvyAs",
        authDomain: "remeberer-8ed40.firebaseapp.com",
        projectId: "remeberer-8ed40",
        storageBucket: "remeberer-8ed40.firebasestorage.app",
        messagingSenderId: "980800277649",
        appId: "1:980800277649:web:8b1d9421bab33b7040c330",
        measurementId: "G-RGR99Y4BE1"
    };

    // Initialize Firebase
    $firebase_app = initializeApp(firebaseConfig);
    $firebase_analytics = getAnalytics($firebase_app);

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

    let current_question_set;

    function OnQuestionSetClick(question_set) {
        console.log("clicked");
        current_question_set = JSON.parse(JSON.stringify(question_set));
        $page = "question_set";
    }
    
    const auth = getAuth();

    auth.onAuthStateChanged((user_) => {
        if (user_) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            $user = user_;
            // ...
            // 👈 This is where you can also query the database as the user for the first time
        } else {
            // User is signed out
            // ...
        }
    });


    function SignIn() {
        const provider = new GoogleAuthProvider();

        auth.useDeviceLanguage();

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                $user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                console.log("success sign in");
            }).catch((error) => {
                $user = null;
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log("error sign in");
                console.log(errorMessage)
            });
    }

    console.log($user)

</script>

<main>
    {#if $page == "main"}
        <MainPage {QuestionSets} {OnQuestionSetClick}></MainPage>
        <div class="w-[100vw] flex justify-center">
            <div>
                {#if !$user}
                    <button type="button" onclick="{SignIn}" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Sign in with google</button>
                {/if}
            </div>
        </div>
    {:else if $page == "question_set"}
        <QuestionSetPage question_set={current_question_set}></QuestionSetPage>
    {/if}
</main>

<!-- https://coolors.co/palette/ff595e-ffca3a-8ac926-1982c4-6a4c93 -->
<style></style>
