<script>
    //@ts-nocheck
    import { Tabs } from 'flowbite-svelte';
    import ConditionsTab from './ConditionsTab.svelte';
    import SpeciesTab from './SpeciesTab.svelte';
    import HistoryTab from './HistoryTab.svelte';
</script>

<Tabs style="underline">
    <ConditionsTab/>
    <SpeciesTab/>
    <HistoryTab/>
</Tabs>