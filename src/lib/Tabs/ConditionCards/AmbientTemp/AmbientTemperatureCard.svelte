<script>
    import { Card, Chart } from 'flowbite-svelte';
    import { Heading } from 'flowbite-svelte';
    import { options } from './tempChart.js';
    
    import SensorStatus from '$lib/UI/SensorStatus.svelte';
    import DeviceStatus from '$lib/UI/DeviceStatus.svelte';

    let s_type = "Temperature Controller"
    let s_name = "Inkbird ITC-308";
    let s_status = "ONLINE";
    
    let d_type = "External Fan"
    let d_name = "Dreo DR-HTF002";
    let d_status = "INACTIVE";

    let current_AT = "70 °F";
    let target_AT = "72 °F"; 

</script>

<Card size="base" class="flex">
    <Heading tag="h5">Ambient Temperature (AT)</Heading>
    <div class="flex flex-row">
        <div class="pr-2"><span class="font-bold">Target AT:</span> {target_AT}</div>
        <div class="pr-2"><span class="font-bold">Current AT:</span> {current_AT}</div>
    </div>
    <Chart {options} />
    <SensorStatus bind:type={s_type} bind:name={s_name} bind:status={s_status}/>
    <DeviceStatus bind:type={d_type} bind:name={d_name} bind:status={d_status} />
</Card>

