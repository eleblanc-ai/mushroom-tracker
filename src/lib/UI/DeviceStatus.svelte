<script>
    import { Indicator, Badge } from 'flowbite-svelte';

    export let device_type;
    export let device_model;
    export let device_status;

    let status_colors = [{value:'ACTIVE', color:'purple'},{value:'INACTIVE', color:'yellow'}]

    let current_color = status_colors.find(item => item.value === device_status)?.color
</script>


<div class="flex flex-row">
    <div class="px-2 font-bold flex flex-row">
        <div class="pr-1">
            {device_type} - <span class="font-normal"> {device_model}</span>
        </div>
    </div>
    <div>
        <Badge color={current_color} rounded class="px-2.5 py-0.5">
            <Indicator color={current_color} size="xs" class="me-1" />{device_status}
        </Badge>
    </div>
</div>