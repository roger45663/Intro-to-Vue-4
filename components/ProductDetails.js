app.component('product-details', {
    template:
    /*html*/
    `
    <div class="product-display">
        <div class="product-container">
            <div>
                {{details}}
            </div>
        </div>
    </div>
    `,
    props: {
        details: {
            type: String,
            required: true    
        }
    }
})