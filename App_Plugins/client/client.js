import { LitElement as e, css as t, customElement as n, html as r, property as i } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as a } from "@umbraco-cms/backoffice/element-api";
//#region \0@oxc-project+runtime@0.150.0/helpers/esm/decorate.js
function o(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
//#endregion
//#region src/navigationGroupCustomView.ts
var s = class extends a(e) {
	render() {
		return r`
            <button type="button">
                    <div class="nav-group-container">
                        <p>
                            <strong>${this.content?.title}</strong>
                            <span>${this.content?.link}</span>
                        </p>

                        <ul>
                            ${(this.content?.childLinks)?.map((e) => r`
                                <li>
                                    <strong>${e.name}</strong>
                                    <span>${e.url}</span>
                                </li>
                            `)}
                        </ul>
                    </div>
            </button>
        `;
	}
	static {
		this.styles = [t`
        button {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        cursor: pointer;
        color: black;
        background-color: transparent;
        text-align: left;
        padding: 0;
        user-select: none;
        border: none;
        transition: border-color 120ms, background-color 120ms;
        max-height: 80vh;
        overflow: hidden;
    }

    .hidden-marker-outer {
        width: 90px;
        height: 30px;
        background-color: red;
        color: white;
        z-index: 1;
        text-align: center;
        align-content: center;
        vertical-align: middle;
        position: absolute;
        top: 0px;
        left: 0px;
        border-radius: 0 0 10px 0;
    }

        .hidden-marker-outer span {
            padding-top: 6px;
            display: block;
        }

    .nav-group-container {
        text-align: left;
        margin-top: 30px;
        padding-right: 10px;
    }

    ul li {
        margin-bottom: 10px;
    }

    strong {
        margin-bottom: 5px;
    }
        `];
	}
};
o([i({ attribute: !1 })], s.prototype, "content", void 0), o([i({ attribute: !1 })], s.prototype, "config", void 0), s = o([n("navigation-group-custom-view")], s);
var c = s;
//#endregion
export { s as NavigationGroupCustomView, c as default };

//# sourceMappingURL=client.js.map