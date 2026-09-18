import { html, customElement, LitElement, property, css, nothing } from '@umbraco-cms/backoffice/external/lit';
import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';
import type { UmbBlockEditorCustomViewElement } from '@umbraco-cms/backoffice/block-custom-view';
import type { UmbBlockDataType } from '@umbraco-cms/backoffice/block';
import type { UmbMediaPickerPropertyValueEntry } from '@umbraco-cms/backoffice/media';

@customElement('example-block-custom-view')
export class ExampleBlockCustomView extends UmbElementMixin(LitElement) implements UmbBlockEditorCustomViewElement {

    @property({ attribute: false })
    content?: UmbBlockDataType;

    override render() {
        const image = (this.content?.image as Array<UmbMediaPickerPropertyValueEntry> | undefined)?.[0];

        return html`
        <h5>${this.content?.featureName}</h5>
        ${image
                ? html`<umb-media-thumbnail .unique=${image.mediaKey} .width=${150} .height=${150}></umb-media-thumbnail>`
                : nothing}
    `;
    }

    static override styles = [
        css`
            :host {
                display: block;
                height: 100%;
                box-sizing: border-box;
                background-color: #dddddd;
                border-radius: 9px;
                padding: 12px;
            }
        `,
    ];
}

export default ExampleBlockCustomView;