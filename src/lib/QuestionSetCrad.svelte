<script>


    export let question_set;
    export let onclickfunc;
    export let progress_bar = 0;

    let p = (progress_bar / 100) * 84;
</script>

<div>
    <button onclick={onclickfunc} class="border-none focus:outline-none p-4 max-w-sm mx-4 mb-0 rounded-xl shadow-lg flex items-center gap-x-4 bg-green-700 hover:scale-110 duration-300 ease-out cursor-pointer">
        <div class="shrink-0">
            <img src="{question_set.image}" alt="" class="size-16 basis-3/4 rounded-lg">
        </div>
        <h4 class="basis-1/8 text-3xl font-medium text-white">{question_set.name}</h4>
    </button>
    <span class="bg-white h-1 opacity-100 left-0 bottom-0 block mt-0 mb-0 ml-[8%]" style="width: {p}%;"></span>
    <!-- max 84% -->
</div>
