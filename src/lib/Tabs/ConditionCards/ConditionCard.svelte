<script>
    import { Card, Heading, Chart } from 'flowbite-svelte';

    import SensorStatus from '$lib/UI/SensorStatus.svelte';
    import DeviceStatus from '$lib/UI/DeviceStatus.svelte';

    import { options, style } from "./base_options";
    
    export let condition;

    const updated_options = {
        ...options,
        fill: { 
            gradient: {
                shade: condition.series_color,
                gradientToColors: [condition.series_color]
            },
        },
        xaxis: {
            title: {
                text: condition.xaxis_title,
                style: style
            },
            categories: condition.xaxis_categories,
            labels: {style: style}
        },
        yaxis: {
            title: {
                text: condition.yaxis_title,
                style: style},
            labels: {style: style}
        },
        series: [{
            name: condition.series_nickname,
            data: condition.series_data,
            color: condition.series_color
        }]
    }
</script>

<Card size="md">
    <Heading tag="h5">{condition.condition_title}</Heading>
    <div class="py-2">
        <SensorStatus bind:sensor_type={condition.sensor_type} bind:sensor_model={condition.sensor_model} bind:sensor_status={condition.sensor_status}/>
        <DeviceStatus bind:device_type={condition.device_type} bind:device_model={condition.device_model} bind:device_status={condition.device_status} />
    </div>
    
    <Card size="base" class="p-5">
        <Chart options={updated_options}/>
    </Card>
    
</Card>