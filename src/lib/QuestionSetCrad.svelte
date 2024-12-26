<script>
    export let question_set;
    export let onclickfunc;
</script>

<button onclick={onclickfunc} class="border-none focus:outline-none p-4 max-w-sm m-4 rounded-xl shadow-lg flex items-center gap-x-4 bg-[#E4572E] hover:scale-110 duration-300 ease-out cursor-pointer">
    <div class="shrink-0">
        <img src="{question_set.image}" alt="" class="size-16 basis-3/4 rounded-lg">
    </div>
    <h4 class="basis-1/8 text-3xl font-medium text-[#FFC914]">{question_set.name}</h4>
</button>