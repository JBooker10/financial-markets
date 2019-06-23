<template>
  <div class="card card-profile">
    <company-header :symbol="companyData.symbol" :companyName="companyData.companyName"/>
    <card-row
      propName="Market Capitalization"
      :propValue="quoteData.marketCap | numeralFormat('($0.00a)').toUpperCase()"
      v-tooltip.bottom="marketCap"
    />
    <card-row propName="Company" :propValue="companyData.companyName"/>
    <card-row v-if="companyData.CEO" propName="CEO" :propValue="companyData.CEO"/>
    <card-row
      v-if="companyData.employees"
      propName="Employees"
      :propValue="companyData.employees | numeralFormat('(0,0)')"
    />
    <card-row
      v-if="companyData.sector"
      propName="Sector"
      :propValue="companyData.sector"
      v-tooltip.bottom="sector"
    />

    <card-row v-if="companyData.industry" propName="Industry" :propValue="companyData.industry"/>
    <card-row propName="Exchange" :propValue="companyData.exchange" v-tooltip.bottom="exchange"/>
    <company-footer :description="companyData.description"/>
    <card-tags :propValue="companyData.tags"/>
  </div>
</template>
<script>
import CompanyHeader from "./CompanyHeader";
import CompanyFooter from "./CompanyFooter";
import CardRow from "./../utils/CardRow";
import CardTags from "./../utils/CardTags";

export default {
  name: "Company",
  components: { CompanyHeader, CompanyFooter, CardRow, CardTags },
  props: { companyData: Object, quoteData: Object },
  data() {
    return {
      placeholder: "",
      marketCap:
        "Market capitalization refers to the total dollar market value of a company's outstanding shares. ",
      sector:
        "A sector is an area of the economy in which businesses share the same or a related product or service. It can also be thought of as an industry or market that shares common operating characteristics. Dividing an economy into different sectors allows for more in-depth analysis of the economy as a whole.",
      exchange: "a market in which securities are bought and sold."
    };
  }
};
</script>
<style>
.card-profile {
  max-width: 400px;
}

.card-main-name {
  margin: 0;
  letter-spacing: 5px;
  text-align: center;
  margin-top: -0.33em;
}
</style>


