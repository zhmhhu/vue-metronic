<template>
<div>
    <m-page-header :title="'Example Picker Page'" :small-title="'Example Picker Page'"></m-page-header>
    <div class="row">
        <div class="col-md-12">
            <m-portlet :title="'Picker'" :color-type="5">
                <!-- <m-datepicker :format="'yyyy-MM-dd'" :value.sync="dateValue" :clean-Button="true"></m-datepicker> -->

            <el-date-picker  v-model="value1"  type="datetime"  format="yyyy年MM月dd日 HH时mm分ss秒" value-format="yyyy-MM-dd HH:mm:ss"  placeholder="选择日期时间"></el-date-picker>
                <div>dateValue:  {{dateValue}}</div>
                <div>value1: {{value1}}</div>
            </m-portlet>
        </div>
     </div>       
</div>
</template>
<script>
    import mPageHeader from '../common/mPageHeader';
    import mPortlet from '../components/portlet/mPortlet';
    // import mDatepicker from '../components/datepicker/mDatepicker';
    export default {
        components: { mPageHeader, mPortlet },
        data () {
            return {
                dateValue: '',
                value1: ''
            };
        }
    };
</script>