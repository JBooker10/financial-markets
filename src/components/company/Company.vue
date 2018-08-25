<template>
    <div class="card card-profile">
    <company-header :symbol="companyData.symbol" :companyName="companyData.companyName"  />
    <card-row propName="Market Capitalization" :propValue="quoteData.marketCap | numeralFormat('($0.00a)').toUpperCase() "/>
    <card-row propName="Company" :propValue="companyData.companyName"/>
    <card-row v-if="companyData.CEO" propName="CEO" :propValue="companyData.CEO"/>
    <card-row v-if="companyData.sector" propName="Sector" :propValue="companyData.sector"/>
    <card-row v-if="companyData.industry" propName="Industry" :propValue="companyData.industry"/>
    <card-row propName="Exchange" :propValue="companyData.exchange"/>
    <company-footer :description="companyData.description"/>
    </div>
</template>
<script>
import CompanyHeader from './CompanyHeader'
import CompanyFooter from './CompanyFooter'
import CardRow from './../utils/CardRow'

export default {
    name: 'Company',
    components: { CompanyHeader, CompanyFooter, CardRow },
    props: { companyData: Object, quoteData: Object },
    data () {
        return {
            placeholder: ''
        }
    }
}
</script>
<style>

.card-main-name {
  margin:0;
  letter-spacing:5px;
  text-align:center;
  margin-top:-.33em;
}

</style>


