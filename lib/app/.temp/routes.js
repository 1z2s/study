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
    name: "v-4528c60c90467",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\README.md").then(comp => {
        Vue.component("v-4528c60c90467", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-b059ccc0a93df",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-b059ccc0a93df", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-69fb5649e17fe",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-69fb5649e17fe", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-eb1e35a01d6f3",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-eb1e35a01d6f3", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-828ce00a34c36",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-828ce00a34c36", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3dae2ccacbc19",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-3dae2ccacbc19", comp.default)
        next()
      })
    }
  },
  {
    name: "v-06b7489c1d98b",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-06b7489c1d98b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-99751a67fabba",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-99751a67fabba", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0001b0d2ff775",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-0001b0d2ff775", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f285aef4bb3db",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-f285aef4bb3db", comp.default)
        next()
      })
    }
  },
  {
    name: "v-97cea6b77c988",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-97cea6b77c988", comp.default)
        next()
      })
    }
  },
  {
    name: "v-73ff31a69e94f",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-73ff31a69e94f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0941e160b8704",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-0941e160b8704", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-173908fb3a093",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-173908fb3a093", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fa47e8211d31",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-fa47e8211d31", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8c3b8a9e84895",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-8c3b8a9e84895", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a2723a1996a9a",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-a2723a1996a9a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-680104d8af279",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-680104d8af279", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-b14fba219c7cb",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-b14fba219c7cb", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-90a15a79bf248",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-90a15a79bf248", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-b807ff96baceb",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-b807ff96baceb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e7c76d7e84bec",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-e7c76d7e84bec", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6004b799b21d6",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-6004b799b21d6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-96096340c6e3c",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-96096340c6e3c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-57ab38469177e",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-57ab38469177e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e59c238df1279",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-e59c238df1279", comp.default)
        next()
      })
    }
  },
  {
    name: "v-88a40deed524e",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-88a40deed524e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4258983e1c56",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-4258983e1c56", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e00a9eab18d3a",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-e00a9eab18d3a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-53ce729b2a9b6",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-53ce729b2a9b6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d4fcb4b345b91",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-d4fcb4b345b91", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1c77064bd1f8d",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-1c77064bd1f8d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4435dc332dc6a",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-4435dc332dc6a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-980b672697e3f",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-980b672697e3f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-239e9ea1efbb6",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-239e9ea1efbb6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2af26f4212575",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-2af26f4212575", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-06827609cec82",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-06827609cec82", comp.default)
        next()
      })
    }
  },
  {
    name: "v-44809b54d00d5",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-44809b54d00d5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-0c85775976c37",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-0c85775976c37", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-f7a4519672d5b",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-f7a4519672d5b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-de9435d4d01e9",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-de9435d4d01e9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-eaa101f7665df",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-eaa101f7665df", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-6a1ccb44eca4f",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-6a1ccb44eca4f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9ef25dc75bf37",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-9ef25dc75bf37", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1b610635267e8",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-1b610635267e8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c298c2eecd3dc",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-c298c2eecd3dc", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-ea55e787e0f2c",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-ea55e787e0f2c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-52309b608a93c",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-52309b608a93c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-f7656d1e9cc3d",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-f7656d1e9cc3d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-20aae4f901658",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-20aae4f901658", comp.default)
        next()
      })
    }
  },
  {
    name: "v-540d82a14849f",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-540d82a14849f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-20511bd13b8f3",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-20511bd13b8f3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-5dfa08e500a61",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-5dfa08e500a61", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-ab9baae2d917a",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-ab9baae2d917a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-346e4fbb4ac0f",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-346e4fbb4ac0f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e02530875a8af",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-e02530875a8af", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8f0800b4b275a",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-8f0800b4b275a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-19f37d5419795",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-19f37d5419795", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f627c5d77be4e",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-f627c5d77be4e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1559848dbc966",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-1559848dbc966", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5fc40782cc59",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-5fc40782cc59", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-4ad01607ed611",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-4ad01607ed611", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fd73a2244991b",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-fd73a2244991b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-eeafdf7e59725",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-eeafdf7e59725", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-cceecdbd9e91d",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-cceecdbd9e91d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-a7fa4b6ad5d4a",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-a7fa4b6ad5d4a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-7289a7317591d",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-7289a7317591d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-cda895f215949",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-cda895f215949", comp.default)
        next()
      })
    }
  },
  {
    name: "v-227fa96774af8",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-227fa96774af8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b8ad35bf9fcee",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-b8ad35bf9fcee", comp.default)
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