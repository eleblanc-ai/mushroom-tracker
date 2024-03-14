<script>
    import { Card, Chart } from 'flowbite-svelte';
    import { Heading } from 'flowbite-svelte';
    import { options } from './humidityChart.js';
    
    import SensorStatus from '$lib/UI/SensorStatus.svelte';
    import DeviceStatus from '$lib/UI/DeviceStatus.svelte';

    let s_type = "Humidity Controller"
    let s_name = "Inkbird IHC-200";
    let s_status = "ONLINE";
    
    let d_type = "Humidifier"
    let d_name = "Honeywell HUL535";
    let d_status = "ACTIVE";

    let current_RH = "70%";
    let target_RH = "85%"; 

</script>

<Card size="base">
    <Heading tag="h5">Relative Humidity (RH)</Heading>        

    <div class="flex flex-row">
        <div class="pr-2"><span class="font-bold">Target RH:</span> {target_RH}</div>
        <div class="pr-2"><span class="font-bold">Current RH:</span> {current_RH}</div>
    </div>
    <Chart {options} />
    <SensorStatus bind:type={s_type} bind:name={s_name} bind:status={s_status}/>
    <DeviceStatus bind:type={d_type} bind:name={d_name} bind:status={d_status} />
</Card>

