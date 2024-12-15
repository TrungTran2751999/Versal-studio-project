<style scoped>
    .nav-font {
        color: white;
        font-weight: bolder;
        user-select: none;
    }
    .nav-font:hover{
        cursor: pointer;
    }
    .menu-dropdown{
        padding-right: 50px;
        font-weight: bold;
    }
    .menu-dropdown-container:hover{
        background-color: aliceblue;
        cursor: pointer;
    }
    .hidden{
        display: none;
    }
    .visible{
        display: flex;
    }
    .chidren-nav-font-hamburg{
        font-size: 12px;
    }
    @media (max-width: 900px) {
        .hidden{
            display: block;
        }
        .visible{
            display: none;
        }
    }
    a{
        text-decoration: none;
    }
</style>
<template>
    <v-app>
        <v-sheet>
            <v-app-bar :elevation="2" style="background-color: black;" class="pa-1">
                <template v-slot:prepend>
                    <v-app-bar-nav-icon @click="showHamburgMenu()" class="nav-font hidden"></v-app-bar-nav-icon>
                    <v-row style="gap:20px; margin-left: 20px;" class="visible">
                        <div class="nav-font">
                            <RouterLink to="/admin">
                                <v-img :src="require('@/assets/logo-2.png')" style="width: 100px; height: 50px;"></v-img>
                            </RouterLink>
                        </div>
                        <div class="nav-font" :id=child.id v-for="child in listChildrenNav" :key="child" style="margin-top: 15px;">
                            {{ child.name }} <span><v-icon>mdi-chevron-down</v-icon></span>
                        </div>
                    </v-row>
                </template>
                <template v-slot:append>
                    
                </template>
               
                <v-menu v-for="child in listChildrenNav" :activator=child.idActivator :key="child">
                    <v-list>
                        <div v-for="item in child.children" :key="item">
                            <RouterLink :to="item.link">
                                <v-list-item class="menu-dropdown-container">
                                    <v-list-item-title class="menu-dropdown">{{ item.name }}</v-list-item-title>
                                </v-list-item>
                            </RouterLink>
                            <v-divider></v-divider>
                        </div>
                    </v-list>
                </v-menu>

            </v-app-bar>

            <v-navigation-drawer v-model="drawer" class="hidden" style="z-index: 99999999999; background-color: black;">
                <v-divider></v-divider>
                <v-list density="compact" nav>
                    <div v-for="nav in listChildrenNav" :key="nav">
                        <v-list-item
                                     @click="showChidrenTreeView(nav.idHambug)" 
                                     class="nav-font" 
                                     :id="nav.idHambug" 
                                     :title="nav.name" 
                                     :append-icon="!nav.isShowChildren ? 'mdi-chevron-right' : 'mdi-chevron-down'"
                                     :value="nav.name">
                        </v-list-item>
                        <v-list-item :id="nav.idChidren" v-show="nav.isShowChildren">
                            <v-list density="compact" nav >
                                <RouterLink :to="navChildren.link" v-for="navChildren in nav.children" :key="navChildren">
                                    <v-list-item class="nav-font chidren-nav-font-hamburg">
                                        {{ navChildren.name }}
                                    </v-list-item>
                                </RouterLink>
                            </v-list>
                        </v-list-item>
                    </div>
                    
                </v-list>
            </v-navigation-drawer>
        </v-sheet>
        <div style="margin-top: 60px;">
            <slot></slot>
        </div>
    </v-app>
</template>
<script>
// import { RouterLink } from 'vue-router';
import { listChildrenNavAdmin } from '../../util/GlobalVariable';

export default {
    data() {
        return {
            drawer: false,
            invisibleHamgurg: false,
            showListItem:{
                "nav-tin-tuc":false
            },
            iconListItem:"mdi-chevron-right",
            listChildrenNav: listChildrenNavAdmin
        }
    },
    methods:{
        showChidrenTreeView(value){
            let obj = this.listChildrenNav.filter(x=>x.idHambug==value)[0]
            if(obj.children.length > 0){
                obj.isShowChildren = !obj.isShowChildren
            }
            this.showListItem[value] = !this.showListItem[value]
            !this.showListItem[value] ? this.iconListItem = "mdi-chevron-right" : this.iconListItem = "mdi-chevron-down"
        },
        showHamburgMenu(){
            this.drawer = !this.drawer
            this.listChildrenNav.map(child=>{
                child.isShowChildren = false
            })
        }
    }
}
</script>