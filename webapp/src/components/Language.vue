<template>
<div class="locale-changer" style="line-height: 40px;">

     <!-- <el-select v-model="getSelectedLan"  @change="changeLan">
        <el-option v-for="lan in langs" :key="lan.id" :value="lan.name">{{lan.name}}</el-option>
    </el-select> -->

    <el-dropdown @command="changeLan">
          <span class="el-dropdown-link">
    {{getSelectedLan}}<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
      <el-dropdown-menu >
          <el-dropdown-item  v-for="lan in langs" :key="lan.id" :command="lan.name">{{lan.name}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
    name:"Langeage",
     data () {
    return { langs: [{id:'zh',name:"中文"}, {id:'en',name:"English"}] }
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
        }
    },
    computed: {
        getSelectedLan : {
            get: function () {        
             var l="";
                for(var i=0;i<this.langs.length;i++){
                    if (this.langs[i].id==this.$i18n.locale){
                        l=this.langs[i].name;
                        break;
                    }
                }
                return l;
                },
                // setter
                set: function (language) {
                   console.log(language);
                }
        }
    }
}
</script>