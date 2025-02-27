document.addEventListener("DOMContentLoaded", function() {
    const commentForm = document.getElementById("comment-form");
    const commentList = document.getElementById("comment-list");

    commentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nameInput = document.getElementById("comment-name");
        const commentInput = document.getElementById("comment-input");
        const visitorName = nameInput.value.trim() || "방문자"; // 이름 입력 없으면 "방문자" 기본값
        const commentText = commentInput.value.trim();

        if (commentText !== "") {
            // 새로운 댓글 요소 생성
            const newComment = document.createElement("li");
            newComment.classList.add("comment-item");
            newComment.innerHTML = `
                <div class="comment-author">
                    <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지"/>
                    <span class="comment-name">${visitorName}</span>
                </div>
                <div class="comment-content">${commentText}</div>
                <button class="delete-comment">삭제</button>
            `;

            // 댓글 리스트에 추가
            commentList.appendChild(newComment);

            // 삭제 버튼 이벤트 추가
            newComment.querySelector(".delete-comment").addEventListener("click", function() {
                newComment.remove();
            });

            // 입력창 초기화
            nameInput.value = "";
            commentInput.value = "";
        }
    });
    console.log(
        "%c" +
        " __      __  ______   __  __   ______     " +
        "\n" +
        "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
        "\n" +
        "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
        "\n" +
        " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
        "\n" +
        "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
        "\n" +
        "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
        "\n" +
        "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
        "color: #d81b60; font-size: 16px; font-weight: bold;"
    );

    console.log("알맞은 스크립트를 작성하세요");


});
