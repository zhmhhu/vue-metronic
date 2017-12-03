<template>
<div>
    <m-page-header :title="'Example Picker Page'" :small-title="'Example Picker Page'"></m-page-header>
    <div class="row">
        <div class="col-md-12">
            <m-portlet :title="'Picker'" :color-type="5">
                <m-datepicker :format="'yyyy-MM-dd'" :value="dateValue" :clean-Button="true" @on-value-change="onValueChange"></m-datepicker>
                <div>{{value}}</div>
            </m-portlet>
        </div>
        
    </div>
</div>
</template>
<script>
    import mPageHeader from '../common/mPageHeader';
    import mPortlet from '../components/portlet/mPortlet';
    import mDatepicker from '../components/datepicker/mDatepicker';
    export default {
        components: { mPageHeader, mPortlet, mDatepicker },
        data () {
            return {
                dateValue: '2017-12-01',
                value: ''
            };
        },
        methods: {
            onValueChange (val) {
                this.value = val;
            }
        }
    };
</script>