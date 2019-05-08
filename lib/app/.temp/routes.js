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
    name: "v-a041c7275e588",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\README.md").then(comp => {
        Vue.component("v-a041c7275e588", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-8aa7bc0cde685",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-8aa7bc0cde685", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-e1a59ded685d1",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-e1a59ded685d1", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-2a199f5b9f7bb",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-2a199f5b9f7bb", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-145d6c684af34",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-145d6c684af34", comp.default)
        next()
      })
    }
  },
  {
    name: "v-880822bb8f4b4",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-880822bb8f4b4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e29c612538043",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-e29c612538043", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cc826c9904766",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-cc826c9904766", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c8e44d130d1cc",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-c8e44d130d1cc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6f155e19db647",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-6f155e19db647", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5921f534f8c73",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-5921f534f8c73", comp.default)
        next()
      })
    }
  },
  {
    name: "v-55f9885011977",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-55f9885011977", comp.default)
        next()
      })
    }
  },
  {
    name: "v-60f6a034e09ec",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-60f6a034e09ec", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-6af0acb64256a",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-6af0acb64256a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-86086166b7eb8",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-86086166b7eb8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fea1103495969",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-fea1103495969", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d5dc02a87ad48",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-d5dc02a87ad48", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-c288f32d3ab56",
    path: "/zh/algorithm/browser.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\algorithm\\browser.md").then(comp => {
        Vue.component("v-c288f32d3ab56", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d7372077e8c28",
    path: "/zh/algorithm/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\algorithm\\html.md").then(comp => {
        Vue.component("v-d7372077e8c28", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3528d6b0337d1",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-3528d6b0337d1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-db77b0eeda7e3",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-db77b0eeda7e3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-a75064027a824",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-a75064027a824", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-3ced2d2880ead",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-3ced2d2880ead", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4a38cf9e3fb85",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-4a38cf9e3fb85", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8868a8eaaf92a",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-8868a8eaaf92a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e856e254b8f83",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-e856e254b8f83", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9e445b80949f",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-9e445b80949f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9c0a7426d934e",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-9c0a7426d934e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-01ddba00edfed",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-01ddba00edfed", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f215caec1612b",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-f215caec1612b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9ddd1767dfec3",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-9ddd1767dfec3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-24165d8c8da15",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-24165d8c8da15", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a221ec3584be1",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-a221ec3584be1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-50e100d4f4288",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-50e100d4f4288", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3e590f1ad0788",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-3e590f1ad0788", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4cd7b0460ec76",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-4cd7b0460ec76", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-bb7e175635e7e",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-bb7e175635e7e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-335b1d7f9f86f",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-335b1d7f9f86f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-4abf5fa5bb1bf",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-4abf5fa5bb1bf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-64126352afbcd",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-64126352afbcd", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-fa70c0c107387",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-fa70c0c107387", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-a6a00beaa7122",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-a6a00beaa7122", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-a50a93f3cdbf9",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-a50a93f3cdbf9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-ba63d077c42b7",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-ba63d077c42b7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-6f650843ce12f",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-6f650843ce12f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-596d90ec0a912",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-596d90ec0a912", comp.default)
        next()
      })
    }
  },
  {
    name: "v-adc1f5916667f",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-adc1f5916667f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f24c415138558",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-f24c415138558", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-5fa30247ab529",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-5fa30247ab529", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-0ae1a14150d98",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-0ae1a14150d98", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-a5bb940ae1da5",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-a5bb940ae1da5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-b91069bbfb705",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-b91069bbfb705", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e50c1b629227d",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-e50c1b629227d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-b88e6363b3a32",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-b88e6363b3a32", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-5baedd0ea769d",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-5baedd0ea769d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-52adb4a144b13",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-52adb4a144b13", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6f0bb53477a53",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-6f0bb53477a53", comp.default)
        next()
      })
    }
  },
  {
    name: "v-166aa5fb05714",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-166aa5fb05714", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cea45f4ab136d",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-cea45f4ab136d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0480546be1f22",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-0480546be1f22", comp.default)
        next()
      })
    }
  },
  {
    name: "v-15d1ee3c14303",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-15d1ee3c14303", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b0d828c1ec349",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-b0d828c1ec349", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ddd8e7844b171",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-ddd8e7844b171", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-22683b9da13b3",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-22683b9da13b3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3dc091f922bf2",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-3dc091f922bf2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-c6395baf1e06c",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-c6395baf1e06c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-5b370ea4b5248",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-5b370ea4b5248", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-465ab8774974a",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-465ab8774974a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-bbe9b21e63803",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-bbe9b21e63803", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-77d410004f265",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-77d410004f265", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a89ea661ae682",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-a89ea661ae682", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f8830c88c16d2",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\mmmmm\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-f8830c88c16d2", comp.default)
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