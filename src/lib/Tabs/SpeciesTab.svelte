<script>
    //@ts-nocheck
    import { Card } from 'flowbite-svelte';
    import { TabItem } from 'flowbite-svelte';
    import { ButtonGroup, Button, GradientButton, Modal } from 'flowbite-svelte';
    import { CirclePlusSolid } from 'flowbite-svelte-icons';

    import BlueOyster from './Species/BlueOyster.svelte';
import LionsMane from './Species/LionsMane.svelte';
import Chestnut from './Species/Chestnut.svelte';

    let selectedSpecies = '';
    let isModalOpen = false;

    const species = [
        { name: 'Blue Oyster', component: BlueOyster },
        { name: 'Lion\'s Mane', component: LionsMane },
        { name: 'Chestnut', component: Chestnut },
    ];

    const handleSpeciesClick = (species) => {
        selectedSpecies = species;
    };

    const handlePlusClick = () => {
        isModalOpen = true;
    };

    // Set the default component to the first species in the array
    selectedSpecies = species[0].name;
</script>

<TabItem open title="Species">
    <div class="flex justify-center">
        <ButtonGroup class="space-10-px">
            {#each species as { name }}
                <GradientButton
                    color="pinkToOrange"
                    on:click={() => handleSpeciesClick(name)}
                >
                    {name}
                </GradientButton>
            {/each}
            <GradientButton color="pinkToOrange" on:click={handlePlusClick}>
                <CirclePlusSolid class="w-5 h-5" />
            </GradientButton>
        </ButtonGroup>
    </div>

    {#each species as { name, component }}
        {#if selectedSpecies === name}
            <svelte:component this={component} />
        {/if}
    {/each}
</TabItem>

<Modal bind:open={isModalOpen} size="xs" autoclose={false} class="w-full">
    <div class="text-center">
        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Placeholder Modal
        </h3>
        <Button color="red" class="mr-2" on:click={() => (isModalOpen = false)}>Close</Button>
    </div>
</Modal>