import Vue from 'vue'
Vue.component("Bit", () => import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\.vuepress\\components\\Bit.vue"))
import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-33f651e13a3af",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\README.md").then(comp => {
        Vue.component("v-33f651e13a3af", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-6c246f455fb94",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-6c246f455fb94", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-5a5e61b31bc1d",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-5a5e61b31bc1d", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-466d1cad447e8",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-466d1cad447e8", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-f6577f8c4ff06",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-f6577f8c4ff06", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6d54bc6956b25",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-6d54bc6956b25", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b3ac3d7b5f442",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-b3ac3d7b5f442", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c0edc10ff97e1",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-c0edc10ff97e1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8da2e10d58512",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-8da2e10d58512", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0e62fd81481a4",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-0e62fd81481a4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7400205247064",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-7400205247064", comp.default)
        next()
      })
    }
  },
  {
    name: "v-21ec2e7cc215b",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-21ec2e7cc215b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d2820847a7721",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-d2820847a7721", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-750a1e887e9fd",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-750a1e887e9fd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c3e4e5bd85a42",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-c3e4e5bd85a42", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6ac878c305324",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-6ac878c305324", comp.default)
        next()
      })
    }
  },
  {
    name: "v-261ccafc53bbb",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-261ccafc53bbb", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-dba0e4463ba9d",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-dba0e4463ba9d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-d6816f491edc8",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-d6816f491edc8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-a5d92c1e84512",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-a5d92c1e84512", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-ce1a6bfef4659",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-ce1a6bfef4659", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3beed8251e42",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-3beed8251e42", comp.default)
        next()
      })
    }
  },
  {
    name: "v-36e4348b21784",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-36e4348b21784", comp.default)
        next()
      })
    }
  },
  {
    name: "v-79815cfc2d94b",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-79815cfc2d94b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-993af56826fdc",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-993af56826fdc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ad9d6cd5596d6",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-ad9d6cd5596d6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-406ce8638ccfa",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-406ce8638ccfa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8fc20c137354f",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-8fc20c137354f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-32eb53bdd1817",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-32eb53bdd1817", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dada9453cf50b",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-dada9453cf50b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-faf6afa2528fa",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-faf6afa2528fa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8d3cad54ca968",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-8d3cad54ca968", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f0b749443d629",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-f0b749443d629", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7740f01689ac6",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-7740f01689ac6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-8ebade02740a3",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-8ebade02740a3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-568ebb764c77b",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-568ebb764c77b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-aad2c7c22a143",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-aad2c7c22a143", comp.default)
        next()
      })
    }
  },
  {
    name: "v-301d10c654f11",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-301d10c654f11", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-615f8c93b097a",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-615f8c93b097a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-9754d6af6efd5",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-9754d6af6efd5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-153ce0c37a20e",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-153ce0c37a20e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-87dc9c1e32eba",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-87dc9c1e32eba", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-939a33c966b35",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-939a33c966b35", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ca1a9a7b9edb7",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-ca1a9a7b9edb7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8391f09b5988d",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-8391f09b5988d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9aca9c39dce25",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-9aca9c39dce25", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-7a871aad22ffa",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-7a871aad22ffa", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-6c6106de0982a",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-6c6106de0982a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-d4031ea389962",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-d4031ea389962", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-5dac69e6bc0a5",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-5dac69e6bc0a5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0adb98fcd514e",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-0adb98fcd514e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-3065d511f6aff",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-3065d511f6aff", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-6776b481685d2",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-6776b481685d2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-8ba575da87e31",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-8ba575da87e31", comp.default)
        next()
      })
    }
  },
  {
    name: "v-337405ddef5be",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-337405ddef5be", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c71b4abdf3aac",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-c71b4abdf3aac", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1ba4753d5aa6f",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-1ba4753d5aa6f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1ff5e0f6c975a",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-1ff5e0f6c975a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-abbf492fdaf3",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-abbf492fdaf3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0a0a1106049ff",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-0a0a1106049ff", comp.default)
        next()
      })
    }
  },
  {
    name: "v-17789aa98b235",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-17789aa98b235", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-91b21ef2186cf",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-91b21ef2186cf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9e6da629f385a",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-9e6da629f385a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-d99181e53854",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-d99181e53854", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-07a95dfa72c4b",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-07a95dfa72c4b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-5da30e6ee0cc5",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-5da30e6ee0cc5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-9b3a52d376de2",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-9b3a52d376de2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-f739556f8739e",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-f739556f8739e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-53f693fb7d3b2",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-53f693fb7d3b2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-737dbc38fc998",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-737dbc38fc998", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/vue钩子函数.html",
    redirect: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html"
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]