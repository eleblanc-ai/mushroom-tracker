<script>
    import { TabItem } from 'flowbite-svelte';
    import ConditionCard from './ConditionCards/ConditionCard.svelte';

    const at_condition = {
        condition_title: "Ambient Temperature (AT)",
        xaxis_title: "Time (HH:MM)",
        yaxis_title: "Temperature (°F)",
        xaxis_categories: ['14:00', '14:05', '14:10', '14:15', '14:20', '14:25'],
        series_data: [73.5,74.5,75.6,72.2,70.7,70],
        series_nickname: "Temp",
        series_color: "#EF476F",
        sensor_type: "Temperature Controller",
        sensor_model: "Inkbird ITC-308",
        sensor_status: "ONLINE",
        device_type: "External Fan",
        device_model: "Dreo DR-HTF002",
        device_status: "ACTIVE"
        
    };

    const rh_condition = {
        condition_title: "Relative Humidity (RH)",
        xaxis_title: "Time (HH:MM)",
        yaxis_title: "Relative Humidity (%)",
        xaxis_categories: ['14:00', '14:05', '14:10', '14:15', '14:20', '14:25'],
        series_data: [86,86.5,87,87.6,87,86],
        series_nickname: "RH",
        series_color: "#48bfe3",
        sensor_type: "Humidity Controller",
        sensor_model: "Inkbird IHC-200",
        sensor_status: "ONLINE",
        device_type: "Humidifier",
        device_model: "Honeywell HUL535",
        device_status: "ACTIVE"
    };
    const co2_condition = {
        condition_title: "CO2 Concentration",
        xaxis_title: "Time (HH:MM)",
        yaxis_title: "Concentration (PPM))",
        xaxis_categories: ['14:00', '14:05', '14:10', '14:15', '14:20', '14:25'],
        series_data: [600,700,800,800,700,null],
        series_nickname: "PPM",
        series_color: "#7bf1a8",
        sensor_type: "CO2 Controller",
        sensor_model: "Inkbird ICC-500T",
        sensor_status: "OFFLINE",
        device_type: "Duct Fan",
        device_model: "Vivosun G6",
        device_status: "ACTIVE"
    };
    const light_condition = {
        condition_title: "Light Intensity",
        xaxis_title: "Time (HH:MM)",
        yaxis_title: "Intensity (Lumens)",
        xaxis_categories: ['14:00', '14:05', '14:10', '14:15', '14:20', '14:25'],
        series_data: [927,927,927,10,10,10],
        series_nickname: "Lumens",
        series_color: "#fee440",
        sensor_type: "Light Meter",
        sensor_model: "TopTes TS-710 ",
        sensor_status: "ONLINE",
        device_type: "LED Strip Grow Lights",
        device_model: "FEIT 11W Selectable Spectrum ",
        device_status: "INACTIVE"
    };
</script>

<TabItem open title="Conditions">
    <div class="flex flex-col md:flex-row">
        <ConditionCard condition={at_condition}/>
        <ConditionCard condition={rh_condition}/>
    </div>
    <div class="flex flex-col md:flex-row">
        <ConditionCard condition={co2_condition}/>
        <ConditionCard condition={light_condition}/>
    </div>
</TabItem>
