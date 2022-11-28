<template>
<div>
    <div class = "d-flex justify-content-end">
        <div class="col-sm-4">
            <b-form-datepicker id="datepicker-valid" :state="true" class="float-right width"></b-form-datepicker>
        </div>
        
    </div>

    <div class="calendar">
        <!-- position: relative-->
        <div class="calendar-hours">
            <span class="calendar-hour-value">0</span>
            <div class="calendar-hour-box"></div>
        </div>
        <div class="calendar-hours">
            <span class="calendar-hour-value">1</span>
            <div class="calendar-hour-box"></div>
        </div>
        <div class="calendar-hours">
            <span class="calendar-hour-value">2</span>
            <div class="calendar-hour-box"></div>
        </div>
        <div class="calendar-hours">
            <span class="calendar-hour-value">3</span>
            <div class="calendar-hour-box"></div>
        </div>
        <div class="calendar-hours">
            <span class="calendar-hour-value">4</span>
            <div class="calendar-hour-box"></div>
        </div>
        <div class="calendar-hours">
            <span class="calendar-hour-value">5</span>
            <div class="calendar-hour-box"></div>
        </div>
        <div class="calendar-hours">
            <span class="calendar-hour-value">6</span>
            <div class="calendar-hour-box"></div>
        </div>
        <div class="calendar-hours">
            <span class="calendar-hour-value">7</span>
            <div class="calendar-hour-box"></div>
        </div>
        <div class="calendar-hours">
            <span class="calendar-hour-value">8</span>
            <div class="calendar-hour-box"></div>
        </div>
    
        <div class="meeting meeting-1"></div> 
        <div class="meeting meeting-2"></div>
    </div>
  </div>
</template>

<script>
export default {
    name:'CalendarPage'

}
</script>

<style scoped>
.calendar {
            position: relative;
        }
    
        .calendar-hours {
            display: flex;
            height: 50px;
            margin-bottom: 10px;
        }
    
        .calendar-hour-value {
            width: 50px;
        }
    
        .calendar-hour-box {
            flex-basis: auto;
            flex-grow: 1;
            background-color: navy;
        }
    
        .meeting {
            position: absolute;
            background-color: lightgray;
            left: 60px;
            right: 10px;
        }
    
        .meeting-1 {
            top: 240px;
            height: 110px;
        }
</style>
