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
    name: "v-11738f55e687a",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\README.md").then(comp => {
        Vue.component("v-11738f55e687a", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-c89ad75da8dc6",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-c89ad75da8dc6", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-b5e6dbf98dbcd",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-b5e6dbf98dbcd", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-a76e55ed547a8",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-a76e55ed547a8", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-4412bedc75b1a",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-4412bedc75b1a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-32dc57c84afaf",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-32dc57c84afaf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ca49cb8f1d658",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-ca49cb8f1d658", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bc8e75c17c14a",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-bc8e75c17c14a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2db8677b26f38",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-2db8677b26f38", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c016e36bd42b3",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-c016e36bd42b3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c353b19cb8589",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-c353b19cb8589", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ba3ebf89a3d52",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-ba3ebf89a3d52", comp.default)
        next()
      })
    }
  },
  {
    name: "v-81bb9d08b19d2",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-81bb9d08b19d2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-d0dab1e94269c",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-d0dab1e94269c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8f05a87eb79ce",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-8f05a87eb79ce", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2ad93f63db049",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-2ad93f63db049", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8a9377e69dffd",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-8a9377e69dffd", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-de01d507fc309",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-de01d507fc309", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-63071bdc58057",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-63071bdc58057", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-61e02dbfd5699",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-61e02dbfd5699", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-e11431c1149b6",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-e11431c1149b6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b04c471e5d1c1",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-b04c471e5d1c1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-99b50dad0d83a",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-99b50dad0d83a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d939a1a1c6294",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-d939a1a1c6294", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a860da921031",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-a860da921031", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2ec528b48e372",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-2ec528b48e372", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4003478ba4364",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-4003478ba4364", comp.default)
        next()
      })
    }
  },
  {
    name: "v-07d33419b10f5",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-07d33419b10f5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-019a8788abd8a",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-019a8788abd8a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a18c4c565e946",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-a18c4c565e946", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4dd78f5dfb91a",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-4dd78f5dfb91a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6c817a7a1b28d",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-6c817a7a1b28d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f12f53b7ecd41",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-f12f53b7ecd41", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5afcbb9caaa53",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-5afcbb9caaa53", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-ca6916c52ab8d",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-ca6916c52ab8d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-25ec5c8f50a3",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-25ec5c8f50a3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-cc517edf24936",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-cc517edf24936", comp.default)
        next()
      })
    }
  },
  {
    name: "v-875723bb3c2a",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-875723bb3c2a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-d9156bb52a129",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-d9156bb52a129", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-ce24bee8cf10b",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-ce24bee8cf10b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-a43405aef4762",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-a43405aef4762", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-2dd724570de6e",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-2dd724570de6e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-2deec14f2b53f",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-2deec14f2b53f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-19bf107191d43",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-19bf107191d43", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f4fb3c0421dc6",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-f4fb3c0421dc6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5aea66f3ea8aa",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-5aea66f3ea8aa", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-1d9ec982c497e",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-1d9ec982c497e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-87f5446a0ab6a",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-87f5446a0ab6a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-5ad1fdebee4ed",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-5ad1fdebee4ed", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-e097305e7ff7b",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-e097305e7ff7b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-93be522aee42f",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-93be522aee42f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-2d8dcb07cc77f",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-2d8dcb07cc77f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-a8b2402069624",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-a8b2402069624", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-c79373647e3c2",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-c79373647e3c2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c6c48eda154a",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-c6c48eda154a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d90d15714c9b5",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-d90d15714c9b5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1991a2baa168a",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-1991a2baa168a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-33e57eefc1d7b",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-33e57eefc1d7b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4d9726621593a",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-4d9726621593a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e8229e995e4a4",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-e8229e995e4a4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f22eb51966f9a",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-f22eb51966f9a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-0d5ed7f6a978a",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-0d5ed7f6a978a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-467ceba0b66ba",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-467ceba0b66ba", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-2981fe2c5072b",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-2981fe2c5072b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-98ae8ee95cafa",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-98ae8ee95cafa", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-1faf28a21e881",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-1faf28a21e881", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-9a86382842ee1",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-9a86382842ee1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-7cecf5f48a319",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-7cecf5f48a319", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f2f5e9d2a0707",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-f2f5e9d2a0707", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5b96e64ca8d1e",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-5b96e64ca8d1e", comp.default)
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