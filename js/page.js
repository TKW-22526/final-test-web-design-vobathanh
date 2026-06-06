const productList = [
    {
        id: 1,
        name: "Arabica Cầu Đất",
        category: "Arabica",
        price: "200000",
        image: "../asset/image/arabica.jpg",
        productLink: "https://giaohoatannoi247.com/shop-hoa-tuoi-tra-vinh.html",
        description: "Arabica Cầu Đất – Hạt cà phê danh tiếng từ cao nguyên Lâm Đồng.\n\nĐặc điểm: Hạt nhỏ, dẹt, đường cong chữ S đặc trưng. Hương thơm phức hợp với notes hoa nhài, cam chanh và vị chua thanh tao.\n\nHương vị: Chua nhẹ dịu dàng, hậu vị ngọt sâu, cảm giác trong trẻo, sạch sẽ trên vòm miệng.\n\nCách pha: Thích hợp pha máy espresso, pour-over, Aeropress. Nhiệt độ nước 90-93°C, tỷ lệ 1:15.\n\nXuất xứ: Cầu Đất, Đà Lạt – vùng đất có khí hậu mát mẻ, đất bazan màu mỡ.\n\nCông dụng: Giảm căng thẳng, tăng cường tập trung, chống oxy hóa, tốt cho trí nhớ."
    },
    {
        id: 2,
        name: "Robusta",
        category: "Robusta",
        price: "150000",
        image: "../asset/image/robusta.jpg",
        productLink: "https://giaohoatannoi247.com/bo-hoa-tulip.html",
        description: "Robusta – Dòng cà phê đậm đà bản sắc Việt Nam.\n\nĐặc điểm: Hạt tròn, nhỏ hơn Arabica, hàm lượng caffeine cao gấp đôi. Cây khỏe, ít sâu bệnh, năng suất cao.\n\nHương vị: Đắng mạnh mẽ, hậu vị kéo dài, thoang thoảng mùi chocolate đen và hạt nướng. Độ body dày, béo.\n\nCách pha: Pha phin truyền thống, bạc xỉu, cà phê sữa đá. Nhiệt độ nước 88-92°C.\n\nXuất xứ: Buôn Ma Thuột, Gia Lai, Đồng Nai – vùng Tây Nguyên đất đỏ bazan.\n\nCông dụng: Tỉnh táo nhanh, hỗ trợ giảm cân, tăng cường trao đổi chất."
    },
    {
        id: 3,
        name: "Caturra",
        category: "Caturra",
        price: "280000",
        image: "../asset/image/caturra.jpg",
        productLink: "https://giaohoatannoi247.com/bo-huong-duong-dep.html",
        description: "Caturra – Biến thể đột biến của Bourbon, chất lượng vượt trội.\n\nĐặc điểm: Cây thấp, dễ thu hoạch, hạt nhỏ nhưng dày mình. Năng suất cao hơn Bourbon truyền thống.\n\nHương vị: Vị chua sáng rõ ràng, hương trái cây họ cam quýt (quýt, cam, chanh). Hậu vị ngọt dịu, không đắng.\n\nCách pha: Pha pour-over với nhiệt độ 92-94°C, xay vừa. Rất hợp để uống black coffee.\n\nXuất xứ: Brazil, Colombia, và các vùng trồng cà phê cao nguyên Việt Nam.\n\nCông dụng: Giảm stress, cải thiện tâm trạng, chứa nhiều chất chống oxy hóa."
    },
    {
        id: 4,
        name: "Bourbon",
        category: "Bourbon",
        price: "350000",
        image: "../asset/image/bourbon.jpg",
        productLink: "https://giaohoatannoi247.com/bo-huong-duong-dep.html",
        description: "Bourbon – Giống cà phê cổ điển, tổ tiên của nhiều dòng Arabica danh tiếng.\n\nĐặc điểm: Quả tròn nhỏ, khi chín có màu đỏ (Bourbon đỏ) hoặc vàng (Bourbon vàng). Hương thơm tinh tế.\n\nHương vị: Ngọt ngào, cân bằng hoàn hảo giữa chua, đắng, ngọt. Notes caramel, mật ong, và hạnh nhân.\n\nCách pha: Pha máy hoặc pha phin đều cho ra ly coffee mượt mà, hậu vị kéo dài.\n\nXuất xứ: Đảo Réunion (Bourbon) – sau đó lan rộng khắp châu Mỹ Latin và châu Phi.\n\nCông dụng: Tốt cho tim mạch, giảm nguy cơ tiểu đường type 2, cải thiện chức năng gan."
    },
    {
        id: 5,
        name: "Specialty Coffee",
        category: "Specialty",
        price: "450000",
        image: "../asset/image/specialty.jpg",
        productLink: "https://giaohoatannoi247.com/bo-huong-duong-dep.html",
        description: "Specialty Coffee – Cà phê đặc sản, đạt chuẩn quốc tế SCA.\n\nĐặc điểm: Điểm số 80+ trên thang 100, không lỗi hạt, thu hoạch thủ công chọn lọc. Hạt đồng đều, màu sắc đẹp.\n\nHương vị: Hương thơm phức tầng: trái cây nhiệt đới, hoa nhài, rượu vang, chocolate đen. Hậu vị siêu dài.\n\nCách pha: Pha pour-over, cold brew, máy espresso chất lượng cao. Nên xay mới trước khi pha.\n\nXuất xứ: Các farm được chứng nhận quốc tế, quy trình canh tác bền vững.\n\nCông dụng: Trải nghiệm vị coffee đỉnh cao, an tâm về chất lượng và nguồn gốc sạch."
    },
    {
        id: 6,
        name: "Catimor",
        category: "Catimor",
        price: "180000",
        image: "../asset/image/catimor.jpg",
        productLink: "https://giaohoatannoi247.com/bo-huong-duong-dep.html",
        description: "Catimor – Lai tạo giữa Caturra và Timor, kháng bệnh gỉ sắt tốt.\n\nĐặc điểm: Cây cao, năng suất cao, hạt tương đối lớn. Được ưa chuộng vì dễ trồng và chăm sóc.\n\nHương vị: Vị đậm đà, đắm đặc trưng phong cách Việt Nam. Notes đất, chocolate, và chút hạt dẻ.\n\nCách pha: Pha phin hoặc nấu phê pha truyền thống rất hợp. Có thể pha sẵn bỏ tủ lạnh uống dần.\n\nXuất xứ: Được trồng phổ biến tại Việt Nam, Đài Loan, Ấn Độ, các nước Đông Nam Á.\n\nCông dụng: Tỉnh táo, tăng cường trao đổi chất, thích hợp cho người cần sự tập trung cao."
    },
    {
        id: 7,
        name: "Cà phê Moka",
        category: "Moka",
        price: "550000",
        image: "../asset/image/moka.jpg",
        productLink: "https://giaohoatannoi247.com/bo-huong-duong-dep.html",
        description: "Cà phê Moka – Dòng cà phê quý hiếm, hương vị đẳng cấp thế giới.\n\nĐặc điểm: Hạt nhỏ, tròn, cứng cáp. Hương thơm tự nhiên quyến rũ, thường được trồng ở cao nguyên.\n\nHương vị: Chua dịu nhẹ như rượu vang, vị ngọt hậu đậm đà, hương hoa nhài và chocolate trắng.\n\nCách pha: Pha pour-over hoặc Aeropress để cảm nhận trọn vẹn hương vị. Nhiệt độ nước 90-92°C.\n\nXuất xứ: Yemen, Ethiopia, và một số vùng cao nguyên Việt Nam như Sơn La, Đà Lạt.\n\nCông dụng: Giảm căng thẳng, tăng cường trí nhớ, thư giãn tinh thần."
    },
    {
    id: 8,
    name: "Cà phê Trung Nguyên",
    category: "Trung Nguyên",
    price: "120000",
    image: "../asset/image/trungnguyen.jpg",
    productLink: "https://brademar.com/chien-dich-quang-cao-cua-ca-phe-trung-nguyen/.html",
    description: "Cà phê Trung Nguyên – Thương hiệu cà phê Việt Nam nổi tiếng toàn cầu, biểu tượng của văn hóa cà phê Việt.\n\nĐặc điểm: Sự pha trộn độc đáo giữa Robusta và Arabica theo công thức bí mật của thương hiệu, tạo nên hương vị đặc trưng khó quên.\n\nHương vị: Đậm đà, mạnh mẽ, hậu vị kéo dài với chút đắng nhẹ và ngọt thanh. Có thể uống đen hoặc với sữa đặc đều rất hợp.\n\nCách pha: Pha phin truyền thống là chuẩn nhất. Nên dùng nước sôi 95-100°C, ủ trong 5-7 phút để ra ly cà phê đúng vị.\n\nXuất xứ: Buôn Ma Thuột, Đắk Lắk – thủ phủ cà phê của Việt Nam, với vùng đất đỏ bazan màu mỡ.\n\nCông dụng: Tỉnh táo tức thì, tăng cường sự tập trung, là thức uống lý tưởng cho buổi sáng và những giờ làm việc căng thẳng."
    },
];

// giỏ hàng
let cart = [];

// tạo sản phẩm
function addProduct(id, name, price, image, link, description) {
    const productItem = document.createElement("div");
    productItem.className = "product-item";
    productItem.setAttribute("data-id", id);

    const productDiv1 = document.createElement("div");
    productDiv1.className = "product-image";
    const productImage = document.createElement("img");
    productImage.src = image;
    productImage.alt = name;
    productDiv1.appendChild(productImage);

    const productDiv2 = document.createElement("div");
    productDiv2.className = "product-info";

    const productName = document.createElement("p");
    productName.className = "title";
    productName.innerText = name;

    const productPrice = document.createElement("p");
    productPrice.className = "price";
    productPrice.innerText = parseInt(price).toLocaleString() + " VND";

    const detailBtn = document.createElement("button");
    detailBtn.className = "detail-btn";
    detailBtn.innerText = "Xem chi tiết";
    detailBtn.onclick = function() {
        showDetailModal(id);
    };

    productDiv2.appendChild(productName);
    productDiv2.appendChild(productPrice);
    productDiv2.appendChild(detailBtn);

    productItem.appendChild(productDiv1);
    productItem.appendChild(productDiv2);

    document.getElementById("product-list").appendChild(productItem);
}

// Hiển thị modal chi tiết
function showDetailModal(productId) {
    const product = productList.find(p => p.id === productId);
    if (!product) return;

    const cartItem = cart.find(item => item.id === productId);
    const currentQuantity = cartItem ? cartItem.quantity : 0;
    
    const formattedDescription = product.description.replace(/\n/g, '<br>');

    const modalHtml = `
        <div class="modal fade" id="productDetailModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${product.name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <img src="${product.image}" class="img-fluid mb-3" style="max-height: 300px; width: 100%; object-fit: cover;" alt="${product.name}">
                        <p><strong>Giá:</strong> ${parseInt(product.price).toLocaleString()} VND</p>
                        <p><strong>Danh mục:</strong> ${product.category}</p>
                        <hr>
                        <p><strong>Mô tả chi tiết:</strong></p>
                        <div style="line-height: 1.7; text-align: justify; background: #f9f7f5; padding: 15px; border-radius: 12px;">
                            ${formattedDescription}
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="form-label"><strong>Số lượng:</strong></label>
                                <input type="number" id="modal-quantity" class="form-control" value="${currentQuantity > 0 ? currentQuantity : 1}" min="1">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label"><strong>Trạng thái:</strong></label>
                                <p class="text-info mt-2">${currentQuantity > 0 ? "✅ Đã có trong giỏ" : "❌ Chưa có trong giỏ"}</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-success" onclick="addToCart(${product.id})">
                            ➕ Thêm vào giỏ hàng
                        </button>
                        <button class="btn btn-danger" onclick="removeFromCart(${product.id})">
                            🗑️ Xóa khỏi giỏ hàng
                        </button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    const oldModal = document.getElementById("productDetailModal");
    if (oldModal) oldModal.remove();

    document.body.insertAdjacentHTML("beforeend", modalHtml);
    const modalElement = document.getElementById("productDetailModal");
    const modal = new bootstrap.Modal(modalElement);
    modal.show();

    modalElement.addEventListener("hidden.bs.modal", function() {
        this.remove();
    });
}

// Thêm vào giỏ
function addToCart(productId) {
    const product = productList.find(p => p.id === productId);
    const quantityInput = document.getElementById("modal-quantity");
    let quantity = quantityInput ? parseInt(quantityInput.value) : 1;
    if (isNaN(quantity) || quantity < 1) quantity = 1;
    
    const existingIndex = cart.findIndex(item => item.id === productId);
    
    if (existingIndex !== -1) {
        cart[existingIndex].quantity += quantity;
        alert(`✅ Đã thêm ${quantity} ${product.name} vào giỏ. Tổng: ${cart[existingIndex].quantity}`);
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: parseInt(product.price),
            quantity: quantity
        });
        alert(`✅ Đã thêm ${quantity} ${product.name} vào giỏ hàng`);
    }
    updateCartUI();
    
    const modalElement = document.getElementById("productDetailModal");
    if (modalElement) {
        const newQuantity = cart.find(item => item.id === productId)?.quantity || 0;
        const statusText = modalElement.querySelector(".text-info");
        const quantityInputModal = modalElement.querySelector("#modal-quantity");
        if (statusText) statusText.innerText = newQuantity > 0 ? "✅ Đã có trong giỏ" : "❌ Chưa có trong giỏ";
        if (quantityInputModal && newQuantity > 0) quantityInputModal.value = newQuantity;
    }
}

// Xóa khỏi giỏ
function removeFromCart(productId) {
    const product = productList.find(p => p.id === productId);
    const existingIndex = cart.findIndex(item => item.id === productId);
    
    if (existingIndex !== -1) {
        cart.splice(existingIndex, 1);
        alert(`🗑️ Đã xóa ${product.name} khỏi giỏ hàng`);
        const quantityInput = document.getElementById("modal-quantity");
        if (quantityInput) quantityInput.value = 1;
        const statusText = document.querySelector("#productDetailModal .text-info");
        if (statusText) statusText.innerText = "❌ Chưa có trong giỏ";
    } else {
        alert(`⚠️ ${product.name} chưa có trong giỏ hàng!`);
    }
    updateCartUI();
}

// Cập nhật giỏ hàng
function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountSpan = document.getElementById("cart-count");
    if (cartCountSpan) {
        cartCountSpan.innerText = totalItems;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Tải giỏ từ localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// Hiển thị tất cả
function displayAllProducts() {
    productList.forEach(product => {
        addProduct(
            product.id,
            product.name,
            product.price,
            product.image,
            product.productLink,
            product.description
        );
    });
}

// Lọc sản phẩm
function filterProduct(category) {
    document.getElementById("product-list").innerHTML = "";
    let filteredProducts = category === "all" ? productList : productList.filter(p => p.category === category);
    filteredProducts.forEach(product => {
        addProduct(product.id, product.name, product.price, product.image, product.productLink, product.description);
    });
}

// Liên hệ
function showContact() {
    const box = document.getElementById("contact-box");
    if (box.style.display === "block") {
        box.style.display = "none";
    } else {
        box.style.display = "block";
    }
}

// Khởi tạo
document.addEventListener("DOMContentLoaded", function() {
    displayAllProducts();
    loadCartFromStorage();
});