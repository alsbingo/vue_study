<template>
    <div id="app" v-loading.fullscreen.lock="loading" >
         <!-- <el-select v-model="getSelectedLan"  @change="changeLan">
        <el-option v-for="lan in langs" :key="lan.id" :value="lan.name">{{lan.name}}</el-option>
    </el-select> -->
    <div>
        {{currentRoute}}

        <router-view></router-view>
 
    </div>
    </div>
</template>

<script> 

export default {
    name:"Home",
   components:{
       
   },
   data () {
    return { 
        serchValue:"",
        loading:false
        }
    //return {langs:['zh','en']}
  },
    methods: {
        changeLan(language){
            var l="";
            for(var i=0;i<this.langs.length;i++){
                if (this.langs[i].name==language){
                    l=this.langs[i].id;
                    break;
                }
            }
            if(this.$i18n.locale==l){
                return false;
            }else{
                this.$i18n.locale=l;
            }
        },
        search(){
            this.loading=true;
            this.$axios.get('/auth/authValue')
            .then(res => {
                this.loading=false;
                this.serchValue=res.data;
                console.log(res)
            })
            .catch(err => {
                this.loading=false;
                console.info(err); 
            })
        }
    },
    computed: {
        getSelectedLan: function () {
             var l="";
            for(var i=0;i<this.langs.length;i++){
                if (this.langs[i].id==this.$i18n.locale){
                    l=this.langs[i].name;
                    break;
                }
            }

            return l;
        },
        userInfo() {
            return this.$store.state.userinfo;
        },
        currentRoute(){
            return this.$route.fullPath;
        }
    }
}
</script>

<style>
    /* #app{
        overflow: hidden;
    } */
</style>