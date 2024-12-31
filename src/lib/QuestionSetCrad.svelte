<script>


    export let question_set;
    export let onclickfunc;
    export let progress_bar = 0;
</script>

<div class="m-4 flex flex-col">
    <button onclick={onclickfunc} id="b" class="border-none focus:outline-none p-4 m-0 rounded-xl shadow-lg flex gap-x-4 bg-green-700 hover:scale-110 duration-300 ease-out cursor-pointer">
        <div class="shrink-0">
            <img src="{question_set.image}" alt="" class="size-16 basis-3/4 rounded-lg">
        </div>
        <h4 class="basis-1/8 text-3xl font-medium text-white">{question_set.name}</h4>
    </button>
    <!-- <span class="bg-white h-1 opacity-100 left-0 bottom-0 block mt-0 mb-0" style="width: {p}%;"></span> -->

    <div id="p-bar" class="flex justify-center relative bottom-[0.3rem]">
        <div class="mb-5 h-1 overflow-hidden rounded-full bg-transparent w-[94%]">
            <div class="h-4 animate-pulse bg-gradient-to-r from-green-500 to-blue-500" style="width: {progress_bar}%"></div>
        </div>
    </div>
    <!-- max 84% -->
</div>

<style>
    #b:hover + #p-bar {
        bottom: 0;
        right: 0.5rem;
    }
</style>