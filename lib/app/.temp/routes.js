import Vue from 'vue'
Vue.component("Bit", () => import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\.vuepress\\components\\Bit.vue"))
import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-f609be17ddddb",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\README.md").then(comp => {
        Vue.component("v-f609be17ddddb", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-60e2b4378131b",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-60e2b4378131b", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-bf5eaccf4678d",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-bf5eaccf4678d", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-9ed9a27e88ac3",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-9ed9a27e88ac3", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-1ffc1a76fc368",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-1ffc1a76fc368", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8c395c5f48cac",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-8c395c5f48cac", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7e15dc1c97958",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-7e15dc1c97958", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5a1faf3131c77",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-5a1faf3131c77", comp.default)
        next()
      })
    }
  },
  {
    name: "v-64c1fd920beb4",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-64c1fd920beb4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7ab1b79efd264",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-7ab1b79efd264", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a4c082e8b6cbd",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-a4c082e8b6cbd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8a8a8cc1a60fa",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-8a8a8cc1a60fa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-42544b39a6d8b",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-42544b39a6d8b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-283d32185b499",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-283d32185b499", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ec5a48036e13e",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-ec5a48036e13e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7397b19093247",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-7397b19093247", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9dbd0e156ad28",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-9dbd0e156ad28", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-ba5d3962394cb",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-ba5d3962394cb", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-c1223fc94853b",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-c1223fc94853b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-2b50b4c51564c",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-2b50b4c51564c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-1cbc2da7bc0fa",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-1cbc2da7bc0fa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-679e42ed00042",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-679e42ed00042", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9f3c28de0d5a1",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-9f3c28de0d5a1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1dd9bfba8f44c",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-1dd9bfba8f44c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-732263a46486f",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-732263a46486f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8480bb6b8d074",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-8480bb6b8d074", comp.default)
        next()
      })
    }
  },
  {
    name: "v-66b79f6117827",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-66b79f6117827", comp.default)
        next()
      })
    }
  },
  {
    name: "v-258920899ac4a",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-258920899ac4a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-65260346deffc",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-65260346deffc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2f5b85a6350b6",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-2f5b85a6350b6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c7f48a1326fa",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-c7f48a1326fa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5115d2f450e99",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-5115d2f450e99", comp.default)
        next()
      })
    }
  },
  {
    name: "v-48f421855776b",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-48f421855776b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3065c6705b193",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-3065c6705b193", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-60bbb8523efc6",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-60bbb8523efc6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c36ab96a8a7ca",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-c36ab96a8a7ca", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-9d76a487e01be",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-9d76a487e01be", comp.default)
        next()
      })
    }
  },
  {
    name: "v-46d9f2b920497",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-46d9f2b920497", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-505aed9522785",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-505aed9522785", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-420e2a4aa2081",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-420e2a4aa2081", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-4bdd5a4dbfb31",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-4bdd5a4dbfb31", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-f4151c1273bd7",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-f4151c1273bd7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-4e56dcb9fccfa",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-4e56dcb9fccfa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d31000e3b77a4",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-d31000e3b77a4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c0d97d8d8d523",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-c0d97d8d8d523", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b833ca6e0b9ed",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-b833ca6e0b9ed", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-082c72e1a9d84",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-082c72e1a9d84", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-db5fc38058243",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-db5fc38058243", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-b30bd5405eb95",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-b30bd5405eb95", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-b53896d0ffc13",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-b53896d0ffc13", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a18bd33788401",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-a18bd33788401", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-23d3500c33221",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-23d3500c33221", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-13ce76dcd799c",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-13ce76dcd799c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-9145f2c1bb6bf",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-9145f2c1bb6bf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-82fcbff323e63",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-82fcbff323e63", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5d0b6b2bfa8d7",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-5d0b6b2bfa8d7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6e799518ee4fc",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-6e799518ee4fc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c8421eac5f8a8",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-c8421eac5f8a8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b414796fb43b6",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-b414796fb43b6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fafe90151deb2",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-fafe90151deb2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-678c39bdba8d7",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-678c39bdba8d7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-0090693a07bbe",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-0090693a07bbe", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f3c3bf46417e",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-f3c3bf46417e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-05e7fc21fd45d",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-05e7fc21fd45d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-af8818c0f2bc5",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-af8818c0f2bc5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-f593d8a5e412a",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-f593d8a5e412a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-9af8c1779766f",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-9af8c1779766f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-c23f433a6724f",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-c23f433a6724f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fa007f2daf40d",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-fa007f2daf40d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-895f294eaa298",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\dell\\Desktop\\case\\aaa\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-895f294eaa298", comp.default)
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