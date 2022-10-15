<script>
    export let plate;
</script>

<li class="py-2 text-base">
    <div class="flex space-x-4 items-center">
        <span class="flex-shrink-0 font-semibold">{plate.title}</span>
        {#if plate.options}
        <div class="flex items-center space-x-2">
            {#if plate.options.isVege}
                <div>
                    <svg class="h-4 w-4" aria-hidden="true" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="xMinYMin">
                        <use xlink:href="#img-vege"></use>
                    </svg>
                    <span class="sr-only">Végétarien</span>
                </div>
            {/if}
            {#if plate.options.isVegan}
                <div>
                    <svg class="h-4 w-4" aria-hidden="true" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="xMinYMin">
                        <use xlink:href="#img-vegan"></use>
                    </svg>
                    <span class="sr-only">Végan</span>
                </div>
            {/if}
            {#if plate.options.isGF}
                <div>
                    <svg class="h-4 w-4" aria-hidden="true" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="xMinYMin">
                        <use xlink:href="#img-gf"></use>
                    </svg>
                    <span class="sr-only">Sans gluten</span>
                </div>
            {/if}
        </div>
        {/if}
        <span class="w-full flex-shrink border-b border-primary border-dashed"></span>
        <span class="flex-shrink-0 font-bold">{plate.price} €</span>
    </div>
    <p class="text-slate-600">{plate.desc ? plate.desc : ''}</p>
</li>