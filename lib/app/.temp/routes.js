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
    name: "v-172efd64735e6",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\README.md").then(comp => {
        Vue.component("v-172efd64735e6", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-56dbd7ca5b143",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-56dbd7ca5b143", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-31b4e7d79702c",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-31b4e7d79702c", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-0ee290460db55",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-0ee290460db55", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-349a90912b91a",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-349a90912b91a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0ed725d4c96ce",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-0ed725d4c96ce", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8a00025ccbf62",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-8a00025ccbf62", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f44c94e710702",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-f44c94e710702", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0e6fce6776f7c",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-0e6fce6776f7c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ea09cfa345819",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-ea09cfa345819", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5d7e0b0cf9c74",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-5d7e0b0cf9c74", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f23f4d0909793",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-f23f4d0909793", comp.default)
        next()
      })
    }
  },
  {
    name: "v-05bc20d00b109",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-05bc20d00b109", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-924acd06baeb2",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-924acd06baeb2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-aafef4418072d",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-aafef4418072d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f1a1783aa4855",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-f1a1783aa4855", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b1d14b199030a",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-b1d14b199030a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-e93944855a9a",
    path: "/zh/algorithm/browser.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\algorithm\\browser.md").then(comp => {
        Vue.component("v-e93944855a9a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-330500035887b",
    path: "/zh/algorithm/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\algorithm\\html.md").then(comp => {
        Vue.component("v-330500035887b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d7e52aacbe417",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-d7e52aacbe417", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-d0f52e5d16ec9",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-d0f52e5d16ec9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-bc55e77bb45a5",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-bc55e77bb45a5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-e97e56012ec37",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-e97e56012ec37", comp.default)
        next()
      })
    }
  },
  {
    name: "v-57f0d9682c72b",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-57f0d9682c72b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cc0bf0b670fd5",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-cc0bf0b670fd5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-11d098371ed42",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-11d098371ed42", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6ba43c3afd734",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-6ba43c3afd734", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ddee66f916559",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-ddee66f916559", comp.default)
        next()
      })
    }
  },
  {
    name: "v-96ffe4c85eddc",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-96ffe4c85eddc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-47102905e4c0e",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-47102905e4c0e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f7daba8eae182",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-f7daba8eae182", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b368c80f80dd8",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-b368c80f80dd8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7ab6377f17689",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-7ab6377f17689", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3727371e92982",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-3727371e92982", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1cb3b23346069",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-1cb3b23346069", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c1f107b88c492",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-c1f107b88c492", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-d622369f6aca5",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-d622369f6aca5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8f083aeb2b6bc",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-8f083aeb2b6bc", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-278f42d76208",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-278f42d76208", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bc3426d36b865",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-bc3426d36b865", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-3a7c7bb72f7ed",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-3a7c7bb72f7ed", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-379a3b97eaab7",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-379a3b97eaab7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-26003ed1c2f88",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-26003ed1c2f88", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-280534803a7ee",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-280534803a7ee", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-c9e7e35a594ed",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-c9e7e35a594ed", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1c7c1acebbd71",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-1c7c1acebbd71", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d085ecf8dc89f",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-d085ecf8dc89f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5b8375770321a",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-5b8375770321a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-dbc8f0e5596d6",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-dbc8f0e5596d6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-50e7fbe444079",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-50e7fbe444079", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-ce3834d24eb81",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-ce3834d24eb81", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-f572c30b5085a",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-f572c30b5085a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6d86c58f8e2e",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-6d86c58f8e2e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-1b25aa701ad4b",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-1b25aa701ad4b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-95c551b0f7195",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-95c551b0f7195", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-ff24bf0f5ae34",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-ff24bf0f5ae34", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4fd7d45bb7676",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-4fd7d45bb7676", comp.default)
        next()
      })
    }
  },
  {
    name: "v-02c0b540b2b7c",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-02c0b540b2b7c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f9021b6e5f048",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-f9021b6e5f048", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8fad42ade19ab",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-8fad42ade19ab", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ac89c80391852",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-ac89c80391852", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8e1510db918f",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-8e1510db918f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4f033cddadbe1",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-4f033cddadbe1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-13cbbe8809c17",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-13cbbe8809c17", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0cf03b8e08055",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-0cf03b8e08055", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-c0aca673b6c27",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-c0aca673b6c27", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-e02b02a7e226b",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-e02b02a7e226b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-2d85486921c43",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-2d85486921c43", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-1a5b25ab2ffd7",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-1a5b25ab2ffd7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-44fc4adb65d07",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-44fc4adb65d07", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0afa4f49b291c",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-0afa4f49b291c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bc9db1f27c58c",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-bc9db1f27c58c", comp.default)
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