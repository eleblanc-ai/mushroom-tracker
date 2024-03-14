<script>
    import { Indicator, Badge } from 'flowbite-svelte';

    export let sensor_type;
    export let sensor_model;
    export let sensor_status;

    let status_colors = [{value:'ONLINE', color:'green'},{value:'OFFLINE', color:'red'}]

    let current_color = status_colors.find(item => item.value === sensor_status)?.color
</script>


<div class="flex flex-row">
    <div class="px-2 font-bold flex flex-row">
        <div class="pr-1">
            {sensor_type} - <span class="font-normal">{sensor_model}</span> 
        </div>
    </div>
    <div>
        <Badge color={current_color} rounded class="px-2.5 py-0.5">
            <Indicator color={current_color} size="xs" class="me-1" />{sensor_status}
        </Badge>
    </div>
</div>
