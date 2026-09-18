import { html, customElement, LitElement, property, css } from '@umbraco-cms/backoffice/external/lit';
import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';
import type { UmbBlockEditorCustomViewConfiguration, UmbBlockEditorCustomViewElement } from '@umbraco-cms/backoffice/block-custom-view';
import type { UmbBlockDataType } from '@umbraco-cms/backoffice/block';

@customElement("navigation-group-custom-view")
export class NavigationGroupCustomView extends UmbElementMixin(LitElement) implements UmbBlockEditorCustomViewElement {

    @property({ attribute: false })
    content?: UmbBlockDataType;

    @property({ attribute: false })
    config?: UmbBlockEditorCustomViewConfiguration;

    override render() {

        return html`
            <button type="button">
                    <div class="nav-group-container">
                        <p>
                            <strong>${this.content?.title}</strong>
                            <span>${this.content?.link}</span>
                        </p>

                        <ul>
                            ${(this.content?.childLinks as any[])?.map((link) => html`
                                <li>
                                    <strong>${link.name}</strong>
                                    <span>${link.url}</span>
                                </li>
                            `)}
                        </ul>
                    </div>
            </button>
        `;
    }

    static override styles = [
        css`
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
        `
    ]
}

export default NavigationGroupCustomView;