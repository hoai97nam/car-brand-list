export class FilterBrandModel {
    all: boolean;
    time: boolean;
    name: boolean;
    models: boolean;
    text: string | undefined;

    constructor() {
        this.all = false;
        this.time = false;
        this.name = false;
        this.models = false;
        this.text = '';
    }
}