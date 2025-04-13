// Database phim + trailer
const movies = {
    1: {
        title: "CKTG 2023: JDG vs T1",
        trailer: "https://www.youtube.com/embed/xxZlV_4KEJk",
        genres: ["Hành Động", "Esports"],
        cast: ["Faker", "Ruler", "Oner", "369"],
        poster: "t/t1vsjdg.png",
        description: "Trận đại chiến đỉnh cao giữa JDG và T1 tại CKTG 2023. Những pha combat mãn nhãn và chiến thuật đỉnh cao."
    },
    2: {
        title: "Jungle Cruise: Thám hiểm rừng xanh ",
        trailer: "https://www.youtube.com/embed/f_HvoipFcA8", 
        genres: ["Hài hước","Phiêu lưu"],
        cast: ["Dwayne Johnson"," Emily Blunt", "Édgar Ramírez", "Jack Whitehall", "Jesse Plemons", "Paul Giamatti"],
        poster: "t/popular-movie-2.jpg",
        description: "Lấy bối cảnh đầu thế kỷ 20, một thuyền trưởng tên Frank Wolff đưa một nhà khoa học và em trai cô vào khu rừng mưa Amazon để tìm Cây Sự Sống, cây mà mọi người tin rằng sở hữu những khả năng chữa trị có lợi ích lớn đối với nền y học hiện đại."
    },

3: {
        title: "Loki",
        trailer: "https://www.youtube.com/embed/nW948Va-l10",
        genres: ["Hành Động/Viễn Tưởng"],
        cast: ["Tom Hiddleston", "Owen Wilson", "Sophia Di Martino", "Gugu Mbatha-Raw", ],
        poster: "t/popular-movie-3.jpg",
        description: "Sau khi trốn thoát bằng Tesseract, Loki bị Cơ quan Quản lý Phương sai Thời gian TVA bắt giữ. Tại đây, anh hợp tác với TVA để truy tìm một biến thể nguy hiểm của chính mình, dẫn đến việc khám phá ra các bí mật về dòng thời gian và đa vũ trụ. Hành trình này buộc Loki phải đối mặt với nhiều biến thể khác của bản thân và đặt ra câu hỏi về định mệnh cũng như bản chất thật sự của mình."


    },

4: {
        title: "Squid Game:Trò chơi con mực",
        trailer: "https://www.youtube.com/embed/B7h331PDlag",
        genres: ["Hành Động","Tâm lý"],
        cast: ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-jun", "Jung Ho-yeon", "Oh Young-soo", "Heo Sung-tae", "..."],
        poster: "t/popular-movie-4.jpg",
        description: "456 người đang gặp khó khăn tài chính tham gia vào một loạt trò chơi sinh tồn, với phần thưởng lên đến 45,6 tỷ won. Người chiến thắng sẽ nhận được toàn bộ số tiền, trong khi những người thua cuộc sẽ phải trả giá bằng mạng sống của mình."
    },
    5: {
        title: "Chim ưng và Chiến binh mùa đông",
        trailer: "https://www.youtube.com/embed/Up1-vxE24d0",
        genres: ["Hành Động","Viễn Tưởng"],
        cast: ["Anthony Mackie", "Sebastian Stan", "Wyatt Russell", "Erin Kellyman", "Daniel Brühl"],
        poster: "t/popular-movie-5.jpg",
        description: "Sau sự kiện Avengers: Hồi kết, Sam Wilson (Chim Ưng) và Bucky Barnes (Chiến binh mùa đông) hợp tác đối phó với các mối đe dọa toàn cầu, khám phá những bí mật về di sản và trách nhiệm của họ trong thế giới hậu The Blip."
    },

6: {
        title: "Hawkeye",
        trailer: "https://www.youtube.com/embed/5VYb3B1ETlk",
        genres: ["Hành động","Viễn tưởng"],
        cast: ["Jeremy Renner", "Hailee Steinfeld", "Tony Dalton", "Alaqua Cox", "Vincent D'Onofrio"],
        poster: "t/popular-movie-6.jpg",
        description: "Clint Barton (Hawkeye) hợp tác với Kate Bishop, một xạ thủ trẻ tài năng, để đối phó với những kẻ thù từ quá khứ và bảo vệ thành phố New York trong mùa lễ hội Giáng Sinh."
    },

7: {
        title: "Đội đặc nhiệm S.H.I.E.L.D",
        trailer: "https://www.youtube.com/embed/IAcXdl6XW5g",
        genres: ["Hành độn","/Viễn tưởng"],
        cast: ["Clark Gregg", "Ming-Na Wen", "Brett Dalton", "Chloe Bennet", "Iain De Caestecker"],
        poster: "t/popular-movie-7.jpg",
        description: "Sau sự kiện The Avengers, Đặc vụ Phil Coulson thành lập Đội Đặc Nhiệm S.H.I.E.L.D., bao gồm các đặc vụ Grant Ward, Melinda May, Leo Fitz và Jemma Simmons. Họ điều tra các vụ việc lạ và bảo vệ thế giới khỏi các mối đe dọa phi thường, trong đó có tổ chức Hydra."
    },
    8: {
        title: "The Flash",
        trailer: "https://www.youtube.com/embed/rQIRKu1Fxmg",
        genres: ["Hành động","Viễn tưởng"],
        cast: ["Ezra Miller", "Ben Affleck", "Michael Keaton", "Sasha Calle", "Kiersey Clemons"],
        poster: "t/popular-movie-8.jpg",
        description: "Barry Allen du hành thời gian để cứu mẹ, vô tình tạo ra vũ trụ không siêu anh hùng. Anh hợp tác với các phiên bản Batman và Supergirl để ngăn chặn thảm họa."
    },
9: {
        title: "Kamen Rider Geats: 4 Aces and the Black Fox",
        trailer: "https://www.youtube.com/embed/oN1WW-PTtqc",
        genres: ["Hành động","Viễn tưởng"],
        cast: ["Kamen Rider Geats", "Kamen Rider X-Geats", "Mela", "Melo", "Ziin"],
        poster: "t/popular-movie-9.jpg",
        description: "Ace bị chia thành bốn bản thể ở bốn thế giới khác nhau. X-Geats, phiên bản tối của Ace, hồi sinh quân đội Jyamato để chinh phục các thế giới. Các bản thể của Ace hợp tác để ngăn chặn X-Geats và khôi phục trật tự."
    },
    10: {
        title: "CKTG 2023 JDG vs T1",
        trailer: "https://www.youtube.com/embed/xxZlV_4KEJk",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "../t/avengers-poster.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    11: {
        title: "CKTG 2023 JDG vs T1",
        trailer: "https://www.youtube.com/embed/xxZlV_4KEJk",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "../t/avengers-poster.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    12: {
        title: "Peaky Blinders",
        trailer: "https://www.youtube.com/embed/oVzVdvGIC7U",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Cillian Murphy", "Paul Anderson", "Harry Kirton", "Sophie Rundle", "Tom Hardy"],
        poster: "t/2.jpg",
        description: "Gia đình Shelby, đứng đầu là Tommy Shelby, điều hành băng đảng Peaky Blinders ở Birmingham sau Thế chiến thứ nhất, đối mặt với các thế lực tội phạm và chính trị để mở rộng quyền lực."
    },

    13: {
        title: "Vệ sĩ sát thủ 2: Nhà có nóc",
        trailer: "https://www.youtube.com/embed/0rb44os21Wg",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Ryan Reynolds", "Samuel L. Jackson", "Salma Hayek", "Morgan Freeman", "Antonio Banderas"],
        poster: "t/movie-2.jpg",
        description: "Vệ sĩ Michael Bryce cùng sát thủ Darius Kincaid và vợ Sonia tham gia vào nhiệm vụ cứu thế giới, đối mặt với nhiều nguy hiểm và tình huống hài hước."
    },

    14: {
        title: "Shang-Chi và huyền thoại Thập Luân",
        trailer: "https://www.youtube.com/embed/5K66kfVce0k",
        genres: ["Hành động", "Viễn tưởng","Võ thuật"],
        cast: ["Simu Liu", "Awkwafina", "Tony Leung", "Michele Yeoh"],
        poster: "t/movie-3.jpg",
        description: "Shang-Chi, một chuyên gia võ thuật, bị lôi kéo vào tổ chức bí ẩn Thập Luân và đối mặt với quá khứ gia đình phức tạp."
    },
    15: {
        title: "Eternals:Chủng tộc bất tử",
        trailer: "https://www.youtube.com/embed/JP3DL4ltaQU",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Gemma Chan", "Richard Madden", "Angelina Jolie", "Salma Hayek"],
        poster: "t/movie-4.jpg",
        description: "Những sinh vật bất tử Eternals bảo vệ Trái Đất khỏi mối đe dọa cổ đại sau hàng nghìn năm ẩn mình."
    },
    16: {
        title: "Điệp viên 007:Bóng Ma",
        trailer: "https://www.youtube.com/embed/vNe1U9xnuhM",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Daniel Craig", "Christoph Waltz", "Ralph Fiennes", "Naomie Harris"],
        poster: "t/movie-5.jpg",
        description: "James Bond đối mặt với tổ chức tội phạm Bóng Ma và khám phá những bí mật từ quá khứ."
    },
    17: {
        title: "Phi vụ triệu đô",
        trailer: "https://www.youtube.com/embed/hx9APx9-vH8",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Mark Wahlberg", "Antonio Banderas", "Gina Rodriguez", "Mel Gibson"],
        poster: "t/movie-6.jpg",
        description: "Những tên tội phạm thực hiện phi vụ cướp ngân hàng trị giá triệu đô, đối mặt với nhiều thử thách."
    },
   
    18: {
        title: "Người sói Wolverine",
        trailer: "https://www.youtube.com/embed/tydtdm3H4X8",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Hugh Jackman", "Liev Schreiber","Danny Huston","Ryan Reynolds"],
        poster: "t/movie-7.jpg",
        description: "Tiền truyện của X-Men, kể về quá trình biến hình của James Howlett thành Wolverine."
    },
    19: {
        title: "Johnny English:Điệp viên không không thấy",
        trailer: "https://www.youtube.com/embed/RpobnvMWetM",
        genres: ["Hành động", "Hài hước"],
        cast: ["Rowan Atkinson", "Natalie Imbruglia", "John Malkovich", "Tim McInnerny"],
        poster: "t/movie-8.jpg",
        description: "Điệp viên vụng về Johnny English được giao nhiệm vụ ngăn chặn âm mưu phá hoại tại Anh Quốc."
    },
    20: {
        title: "Venom: Đối mặt tử thù",
        trailer: "https://www.youtube.com/embed/EVWdzVtSh1I",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Tom Hardy", "Woody Harrelson", "Michelle Williams", "Naomie Harris"],
        poster: "t/m1.jpg",
        description: "Venom và Eddie Brock đối mặt với Carnage, một sinh vật nguy hiểm khác."
    },
    21: {
        title: "Vệ binh dải Ngân Hà",
        trailer: "https://www.youtube.com/embed/xh2lgzlwQ30",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Chris Pratt", "Zoe Saldana", "Dave Bautista", "Vin Diesel"],
        poster: "t/m20.jpg",
        description: "Nhóm Vệ Binh không gian bảo vệ dải Ngân Hà khỏi các mối đe dọa."
    },
    22: {
        title: "Batman đại chiến Superman:Ánh sáng công lý",
        trailer: "https://www.youtube.com/embed/b6im-6pbmis",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Henry Cavill", "Ben Affleck", "Gal Gadot", "Jesse Eisenberg"],
        poster: "t/m3.jpg",
        description: "Cuộc đối đầu giữa hai siêu anh hùng huyền thoại Batman và Superman, dẫn đến sự hình thành của Liên minh Công lý."
    },
    23: {
        title: "Sát thủ John Wick 2",
        trailer: "https://www.youtube.com/embed/6Kc2CLmf_lk",
        genres: ["Hành động", "Võ thuật"],
        cast: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen", "Willem Dafoe"],
        poster: "t/m4.jpg",
        description: ": John Wick, một sát thủ nghỉ hưu, trở lại thế giới ngầm sau khi kẻ thù giết chó cưng của anh."
    },
    24: {
        title: "Aquaman: Đế vương Atlantis",
        trailer: "https://www.youtube.com/embed/9bi2-KGVN3U",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Jason Momoa", "Amber Heard", "Nicole Kidman", "Patrick Wilson"],
        poster: "t/m5.jpg",
        description: "Aquaman đối mặt với thử thách để trở thành vua của Atlantis và ngăn chặn chiến tranh giữa các vương quốc."
    },
    25: {
        title: "Chiến Binh Báo Đen - Black Panther",
        trailer: "https://www.youtube.com/embed/sKX4zA52B9c",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o", "Danai Gurira"],
        poster: "t/m6.jpg",
        description: "T'Challa trở về Wakanda để nhận ngai vàng, đối mặt với kẻ thù cũ và bảo vệ vương quốc."
    },
    26 :{
        title: "Thor:Thần Sấm",
        trailer: "https://www.youtube.com/embed/JOddp-nlNvQ",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston", "Anthony Hopkins"],
        poster: "t/m7.jpg",
        description: "Thor, thần sấm của Asgard, bị trục xuất xuống Trái Đất và học cách sống như con người."
    },
    27 :{
        title: "Bumblebee",
        trailer: "https://www.youtube.com/embed/lcwmDAYt22k",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Hailee Steinfeld", "John Cena", "Jorge Lendeborg Jr.", "Jason Drucker"],
        poster: "t/m8.png",
        description: "Bumblebee - ngoại truyện Transformers xoay quanh chàng robot được yêu thích Bumblebee. Optimus Prime gửi Bee xuống Trái Đất sau khi hành tinh Cybertron diệt vong vì cuộc chiến giữa phe Autobot và phe Decepticon. Cậu bị một Decepticon đánh trọng thương và phải ẩn náu trong một gara xe hơi cũ. Tại đây, Bee vô tình gặp Charlie Watson (Hailee Steinfeld), cả 2 kết bạn và cùng nhau vượt qua sự truy đuổi của con người cũng như phe Deception."
    },
    28 :{
        title: "Cỗ máy tử thần",
        trailer: "https://www.youtube.com/embed/zYB1vTxZoRA",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Hera Hilmar", "Robert Sheehan", "Hugo Weaving", "Jihae", "Stephen Lang"],
        poster: "t/m9.jpg",
        description: "Trong thế giới hậu tận thế, Hester Shaw và Tom Natsworthy hợp tác để ngăn chặn âm mưu hủy diệt của Thaddeus Valentine, kẻ đứng đầu thành phố cơ giới hóa London."
    },
    29 :{
        title: "Thế giới ngầm: Trận chiến đẫm máu",
        trailer: "https://www.youtube.com/embed/T3DXLN7-mPY",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Kate Beckinsale", "Theo James", "Tobias Menzies", "Lara Pulver", "Charles Dance"],
        poster: "t/m10.jpg",
        description: "Ma cà rồng Selene chiến đấu để kết thúc cuộc chiến giữa ma cà rồng và người sói, đồng thời bảo vệ con gái khỏi kẻ thù săn đuổi."
    },
    30 :{
        title: "Natra 2:Ma Đồng Náo Hải",
        trailer: "https://www.youtube.com/embed/q8ykuxqDsew",
        genres: ["Hành động", "Hoạt hình", "Phiêu lưu"],
        cast: ["Yang Yendong", "Zhang Jiaming", "Zhang Lei", "Liu Yuxuan", "Zhang Yanhui"],
        poster: "t/1.jpg",
        description: "Cậu bé Natra sinh ra với sứ mệnh đặc biệt, phải vượt qua định kiến và chiến đấu chống lại thế lực tà ác để cứu lấy thế giới."
    },
    31 :{
        title: "Warcraft",
        trailer: "https://www.youtube.com/embed/2Rxoz13Bthc&t=3s",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Travis Fimmel", "Paula Patton", "Ben Foster", "Dominic Cooper", "Toby Kebbell"],
        poster: "t/m12.jpg",
        description: "Cuộc chiến giữa loài người và tộc Orc nổ ra khi cánh cổng giữa hai thế giới được mở, đe dọa sự sống còn của cả hai bên."
    },
    32 :{
        title: "Siêu thú cuồng nột",
        trailer: "https://www.youtube.com/embed/RDAZZh22qzI",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Dwayne Johnson", "Naomie Harris", "Malin Åkerman", "Jeffrey Dean Morgan", "Jake Lacy"],
        poster: "t/m13.jpg",
        description: "Một nhà sinh vật học liên kết với một con khỉ đột đột biến để ngăn chặn các sinh vật khổng lồ tàn phá thành phố."
    },
    33 :{
        title: "Captain Marvel",
        trailer: "https://www.youtube.com/embed/Z1BCujX3pw8",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Brie Larson", "Samuel L. Jackson", "Ben Mendelsohn", "Jude Law", "Annette Bening"],
        poster: "t/m17.jpg",
        description: "Carol Danvers trở thành siêu anh hùng Captain Marvel khi Trái Đất bị cuốn vào cuộc chiến giữa hai chủng tộc ngoài hành tinh."
    },
    34 :{
        title: "Liên minh Công lý",
        trailer: "https://www.youtube.com/embed/I9knrr9iwJc",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Ben Affleck", "Henry Cavill", "Gal Gadot", "Ezra Miller", "Jason Momoa"],
        poster: "t/m15.jpg",
        description: "Batman và Wonder Woman tập hợp nhóm siêu anh hùng để đối đầu với mối đe dọa từ ngoài vũ trụ."
    },
    35 :{
        title: "Doctor Strange: Phù thủy tối thượng",
        trailer: "https://www.youtube.com/embed/V3hxdu0Ejus",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Benedict Cumberbatch", "Chiwetel Ejiofor", "Rachel McAdams", "Benedict Wong", "Mads Mikkelsen"],
        poster: "t/m16.jpeg",
        description: "Bác sĩ Stephen Strange học nghệ thuật huyền bí sau tai nạn xe hơi, trở thành phù thủy bảo vệ thế giới khỏi các mối đe dọa ma thuật."
    },


    //HOẠT HÌNH
    36 :{
        title: "Doraemon: Nobita và chuyến phiêu lưu vào xứ quỷ",
        trailer: "https://www.youtube.com/embed/aIWdaI-6Vt0",
        genres: ["Hoạt hình", "Phiêu lưu"],
        cast: ["Wasabi Mizuta", "Megumi Ōhara", "Yumi Kakazu", "Subaru Kimura", "Tomokazu Seki"],
        poster: "t/h2.jpg",
        description: "Nobita và nhóm bạn sử dụng bảo bối của Doraemon để khám phá thế giới ma thuật và đối đầu với thế lực đen tối."
    },
    37 :{
        title: "Thám Tử Lừng Danh Conan:Ngôi Sao 5 Cánh 1 Triệu Đô",
        trailer: "https://www.youtube.com/embed/C4pG3GbhQZw",
        genres: ["Hoạt hình", "Hành động"],
        cast: ["Minami Takayama", "Wakana Yamazaki", "Rikiya Koyama", "Kappei Yamaguchi", "Megumi Hayashibara"],
        poster: "t/h3.jpg",
        description: "Conan điều tra vụ án liên quan đến viên kim cương quý giá và một tên trộm khét tiếng."
    },
    38 :{
        title: "Na Tra: Ma Đồng Giáng Thế",
        trailer: "https://www.youtube.com/embed/yCJy9roIv8Q",
        genres: ["Hoạt hình", "Phiêu lưu", "Hành động"],
        cast: ["Lu Yanting", "Joseph", "Mo Han", "Chen Hao", "Yang Wei"],
        poster: "t/h4.jpg",
        description: "Na Tra, sinh ra với số mệnh bị nguyền rủa, phải vượt qua định kiến để trở thành anh hùng cứu thế giới."
    },
    39 :{
        title: "Fairy Tail: Nhiệm Vụ 100 Năm",
        trailer: "https://www.youtube.com/embed/BfNwg9-r9v4",
        genres: ["Hoạt hình", "Phiêu lưu"],
        cast: ["Tetsuya Kakihara", "Aya Hirano", "Rie Kugimiya", "Yuuichi Nakamura", "Sayaka Ohara"],
        poster: "t/h5.jpg",
        description: "Nhóm pháp sư Fairy Tail bắt đầu nhiệm vụ 100 năm đầy nguy hiểm để chứng minh sức mạnh và lòng dũng cảm của mình."
    },
    40 :{
        title: "Kung Fu Panda",
        trailer: "https://www.youtube.com/embed/NRc-ze7Wrxw",
        genres: ["Hoạt hình", "Hành động","Võ thuật"],
        cast: ["Jack Black", "Dustin Hoffman", "Angelina Jolie", "Ian McShane", "Seth Rogen"],
        poster: "t/h7.jpg",
        description: "Po, một chú gấu trúc vụng về, được chọn làm chiến binh rồng và phải học kung fu để bảo vệ thung lũng khỏi kẻ thù."
    },
    41 :{
        title: "Hanma Baki VS Đấu Sĩ Ashura",
        trailer: "https://www.youtube.com/embed/utSKPQsI07I",
        genres: ["Hoạt hình", "Hành động"],
        cast: ["Nobunaga Shimazaki", "Tatsuhisa Suzuki", "Kenjiro Tsuda", "Yoshihisa Kawahara", "Takuya Eguchi"],
        poster: "t/h6.jpg",
        description: "Cuộc đối đầu giữa hai võ sĩ huyền thoại, Hanma Baki và Tokita Ohma, trong trận chiến đỉnh cao của võ thuật."
    },
    42 :{
        title: "Pokémon: Kyurem vs. the Sword of Justice",
        trailer: "https://www.youtube.com/embed/VZmd_uEHxO0Q",
        genres: ["Hoạt hình", "Phiêu lưu"],
        cast: ["Sarah Natochenny", "Eileen Stevens", "Jason Griffith", "Marc Thompson", "James Carter Cathcart"],
        poster: "t/h8.jpg",
        description: "Ash và Pikachu gặp gỡ Pokémon huyền thoại Keldeo và giúp nó đối đầu với Kyurem để cứu bạn bè."
    },
    43 :{
        title: "Pokémon:Mewtwo Phục Thù",
        trailer: "https://www.youtube.com/embed/rLZTTuBFKoc",
        genres: ["Hoạt hình", "Phiêu lưu"],
        cast: ["Veronica Taylor", "Rachael Lillis", "Eric Stuart", "Madeleine Blaustein", "Ikue Ōtani"],
        poster: "t/h10.png",
        description: "Mewtwo, Pokémon nhân tạo, tìm cách trả thù loài người, trong khi Ash và bạn bè cố gắng ngăn chặn thảm họa."
    },
    44 :{
        title: "CRAYON SHIN CHAN:NHẬT KÝ KHỦNG LONG CỦA CHÚNG MÌNH",
        trailer: "https://www.youtube.com/embed/2tvlXNyetjI",
        genres: ["Hoạt hình", "Phiêu lưu"],
        cast: ["Yumiko Kobayashi", "Miki Narahashi", "Toshiyuki Morikawa", "Satomi Kōrogi", "Mari Mashiba"],
        poster: "t/h9.png",
        description: "Shin-chan cùng gia đình và bạn bè bảo vệ Tokyo khỏi khủng long trong chuyến phiêu lưu kỳ thú."
    },
    45 :{
        title: "Shin - Cậu bé bút chì: Truyền thuyết nhẫn thuật Ninja",
        trailer: "https://www.youtube.com/embed/zhnhYTm7Xsg",
        genres: ["Hoạt hình", "Phiêu lưu"],
        cast: ["Yumiko Kobayashi", "Miki Narahashi", "Toshiyuki Morikawa", "Satomi Kōrogi", "Mari Mashiba"],
        poster: "t/h11.jpg",
        description: "Shin-chan khám phá bí mật về gia tộc Ninja và hành trình trở thành Ninja thực thụ"
    },


    //tâm lí
    46 :{
        title: "Bác sĩ ăn thịt người - Hannibal season 3",
        trailer: "https://www.youtube.com/embed/DKawQtGefAw",
        genres: ["Kinh dị", "Tâm lý"],
        cast: ["Mads Mikkelsen", "Hugh Dancy", "Caroline Dhavernas"],
        poster: "t/tl1.jpg",
        description: "Tiến sĩ Hannibal Lecter và đặc vụ FBI Will Graham tiếp tục cuộc chơi tâm lý căng thẳng, đẫm máu."
    },
    47 :{
        title: "Chân Tướng - Truth",
        trailer: "https://www.youtube.com/embed/FZL2Jt0D7p0",
        genres: ["Hành động", "Tâm lý"],
        cast: ["Trần Tinh Húc", "Cái Nguyệt Hy"],
        poster: "t/tl2.jpg",
        description: "Các kỹ thuật viên giám định khám phá sự thật đằng sau những vụ án phức tạp."
    },
    48 :{
        title: "Hành trình tình yêu của một du khách – A tourist’s guide to love",
        trailer: "https://www.youtube.com/embed/suWHJ8F3qqc",
        genres: ["Tâm lý", "Phiêu lưu"],
        cast: ["Rachael Leigh Cook", "Scott Ly", "Missi Pyle"],
        poster: "t/tl3.jpeg",
        description: "Amanda Riley du lịch Việt Nam sau chia tay, tìm lại chính mình và tình yêu mới."
    },
    49 :{
        title: "Kẻ Săn Người (마우스) - Mouse",
        trailer: "https://www.youtube.com/embed/8CN_199YVKA",
        genres: ["Kinh dị", "Tâm lý"],
        cast: ["Lee Seung-gi", "Lee Hee-joon"],
        poster: "t/tl4.jpg",
        description: "Cảnh sát Jeong Ba-reum đối mặt với tên sát nhân tâm thần, khám phá bản chất con người."
    },
    50 :{
        title: "Thành Phố Thất Lạc: Cuộc Chiến Công Lý",
        trailer: "https://www.youtube.com/embed/0ussOjmTUQU",
        genres: ["Tâm lý", "Hành động"],
        cast: ["Qiao Jia Xu", "Kate", "Han Piao Jun"],
        poster: "t/tl5.jpg",
        description: "Cuộc chiến giữa các thế lực trong thành phố tội phạm, nơi công lý phải được bảo vệ."
    },
    51 :{
        title: "Chiến Tranh-Loạn Lạc",
        trailer: "https://www.youtube.com/embed/0ussOjmTUQU",
        genres: ["Tâm lý", "Hành động"],
        cast: ["Chae Soo Bin", "Yoo Seung Ho"],
        poster: "t/tl6.jpg",
        description: "Cuộc sống và tình yêu trong thời chiến, nơi lựa chọn sinh tồn trở nên khắc nghiệt."
    },
    52 :{
        title: "Khi Cuộc Đời Cho Bạn Quả Quýt",
        trailer: "https://www.youtube.com/embed/9RmzMUYXcik",
        genres: ["Tâm lý", "Tình cảm"],
        cast: ["IU", "Park Bo Gum"],
        poster: "t/tl7.jpg",
        description: "Tại đảo Jeju những năm 1950-1960, hai người bạn trẻ đối mặt với thử thách và định kiến."
    },
    //Kinh dị
    53 :{
        title: "Gã hề ma quái 2",
        trailer: "https://www.youtube.com/embed/CNoVNODUjpw",
        genres: ["Tâm lý", "Kinh dị"],
        cast: ["Bill Skarsgård", "Jaeden Martell", "Finn Wolfhard"],
        poster: "t/kd1.jpg",
        description: "Nhóm trẻ em ở Derry đối mặt với gã hề Pennywise, kẻ săn lùng và ăn thịt trẻ em."
    },
    54 :{
        title: "TÌNH NGƯỜI DUYÊN MA",
        trailer: "https://www.youtube.com/embed/5BiWRqBXCrY",
        genres: ["Kinh dị", "Hài hước","Tình cảm"],
        cast: ["Mario Maurer", "Davika Hoorne"],
        poster: "t/kd2.jpg",
        description: "Câu chuyện tình yêu giữa người lính và hồn ma vợ anh, dựa trên truyền thuyết Thái Lan."
    },
    55 :{
        title: "Exhuma: Quật mộ trùng ma",
        trailer: "https://www.youtube.com/embed/66K9-l0EkE0",
        genres: ["Tâm lý", "Kinh dị"],
        cast: ["Choi Min-sik", "Kim Go-eun", "Yoo Hae-jin", "Lee Do-hyun"],
        poster: "t/kd3.jpg",
        description: "Nhóm chuyên gia khai quật ngôi mộ cổ, giải phóng thế lực tà ác gây hiện tượng siêu nhiên."
    },
    56 :{
        title: "Cô gái đến từ hư vô",
        trailer: "https://www.youtube.com/embed/YF2NfHkn0vM",
        genres: ["Tâm lý", "Kinh dị"],
        cast: ["Chicha Amatayakul"],
        poster: "t/kd4.jpg",
        description: "Nanno, cô gái bí ẩn, chuyển đến các trường học, vạch trần bí mật và sự giả tạo."
    },
    57 :{
        title: "Kẻ Ăn Hồn",
        trailer: "https://www.youtube.com/embed/xWh0g4rKGjI",
        genres: ["Kinh dị"],
        cast: ["Võ Điền Gia Huy", "Lan Phương", "Lý Hồng Ân", "Hoàng Hà"],
        poster: "t/kd5.jpg",
        description: "Phim kinh dị về truyền thuyết hồn ma trong làng cổ, kết hợp yếu tố tâm linh và rùng rợn."
    },
    58 :{
        title: "Pháp sư mù: Ai chết giơ tay",
        trailer: "https://www.youtube.com/embed/alShfrI18qI",
        genres: ["Kinh dị" , "Hài hước"],
        cast: ["Huỳnh Lập", "Việt Hương", "Đại Nghĩa", "Hạnh Thảo", "Quang Trung"],
        poster: "t/kd6.jpg",
        description: "Tinh Lâm, pháp sư mù, cùng bạn bè khám phá thế giới oan hồn trong hành trình chữa mắt."
    },
    59 :{
        title: "Ứng dụng tử thần",
        trailer: "https://www.youtube.com/embed/UAUSy5FxYX8",
        genres: ["Kinh dị"],
        cast: ["Elizabeth Lail", "Jordan Calloway", "Talitha Eliana Bateman", "Peter Facinelli"],
        poster: "t/kd7.jpg",
        description: "Ứng dụng điện thoại dự đoán thời gian chết của người dùng, dẫn đến chuỗi sự kiện kinh hoàng."
    },
    60 :{
        title: "Vùng đất câm lặng",
        trailer: "https://www.youtube.com/embed/0hLoZ20qTM8",
        genres: ["Kinh dị", "Viễn tưởng"],
        cast: ["Emily Blunt", "John Krasinski", "Millicent Simmonds", "Noah Jupe"],
        poster: "t/kd8.jpg",
        description: "Gia đình sống trong im lặng để tránh quái vật săn mồi bằng âm thanh, đấu tranh sinh tồn."
    },
    // Hài hước
    61 :{
        title: "Tuyệt Đỉnh Kungfu",
        trailer: "https://www.youtube.com/embed/FtE9-o6dBEI",
        genres: ["Hành động", "Hài hước","Võ thuật"],
        cast: ["Châu Tinh Trì", "Vương Bảo Cường", "Trần Tử Hàm", "Lâm Tử Thiên"],
        poster: "t/hh1.jpg",
        description: "Chàng trai nghèo mơ ước trở thành cao thủ võ thuật, đối đầu với băng đảng tội phạm."
    },
    62 :{
        title: "CẶP ĐÔI GIÁN ĐIỆP",
        trailer: "https://www.youtube.com/embed/HkaXtRU-NsU",
        genres: ["Hành động", "Hài hước"],
        cast: ["Dwayne Johnson", "Gal Gadot", "Ryan Reynolds"],
        poster: "t/hh2.jpg",
        description: "Bộ phim hành động hài kể về một tên trộm nghệ thuật và một nữ trộm chuyên nghiệp hợp tác cùng nhau trong một phi vụ lớn, đối mặt với nhiều tình huống nguy hiểm và hài hước."
    },
    63 :{
        title: "Bỗng Dưng Trúng Số",
        trailer: "https://www.youtube.com/embed/D3KbO3QF-lg",
        genres: ["Hài hước"],
        cast: ["François-Xavier Demaison", "Audrey Dana", "Gérard Jugnot"],
        poster: "t/hh3.png",
        description: "Câu chuyện về một nhân viên văn phòng bình thường đột nhiên trúng số độc đắc, cuộc sống của anh thay đổi hoàn toàn với nhiều tình huống dở khóc dở cười."
    },
    64 :{
        title: "Kì Nghỉ Của Mr. Bean",
        trailer: "https://www.youtube.com/embed/bXS1LMaU7TM",
        genres: ["Phiêu lưu", "Hài hước"],
        cast: ["Rowan Atkinson", "Emma de Caunes", "Max Baldry"],
        poster: "t/hh4.jpg",
        description: "Ngài Bean trúng thưởng chuyến du lịch đến Cannes, Pháp. Trong hành trình, ông gặp nhiều tình huống hài hước khi cố gắng giúp đỡ một cậu bé và tham gia vào Liên hoan phim Cannes."
    },
    65 :{
        title: "Kẻ trộm mặt trăng",
        trailer: "https://www.youtube.com/embed/ZwveGcd8kd0",
        genres: ["Hài hước", "Hoạt hình","Hành động"],
        cast: ["Steve Carell", "Jason Segel", "Russell Brand"],
        poster: "t/hh5.jpg",
        description: "Gru, một siêu trộm, lên kế hoạch đánh cắp mặt trăng nhưng cuộc sống của anh thay đổi khi anh nhận nuôi ba cô con gái mồ côi."
    },
    66 :{
        title: "Nhóc trùm – The Boss Baby",
        trailer: "https://www.youtube.com/embed/rJdTUnrrISk",
        genres: ["Hài hước", "Hoạt hình"],
        cast: ["Alec Baldwin", "Steve Buscemi", "Jimmy Kimmel"],
        poster: "t/hh6.jpg",
        description: "Câu chuyện về một cậu bé biết nói và mặc suit, cùng anh trai mình tham gia vào cuộc chiến giữa các gia đình để giành lấy tình yêu thương của cha mẹ."
    },
    67 :{
        title: "Đội bóng Thiếu Lâm",
        trailer: "https://www.youtube.com/embed/3FF7BXeOGyQ",
        genres: ["Hành động", "Hài hước","Võ thuật"],
        cast: ["Jackie Chan", "Wang Leehom", "Fan Bingbing"],
        poster: "t/hh7.jpg",
        description: "Một nhóm trẻ em mồ côi được dạy võ thuật bởi một sư phụ Thiếu Lâm, họ thành lập đội bóng đá để tham gia giải đấu và đối mặt với nhiều thử thách."
    },
    68 :{
        title: "Trạng Quỳnh",
        trailer: "https://www.youtube.com/embed/N8yrOanbEcY",
        genres: ["Hài hước", "Tâm lý"],
        cast: ["Quang Tuấn", "Nhã Phương", "Công Dương"],
        poster: "t/p1.jpg",
        description: "Phim kể về Trạng Quỳnh, một nhân vật nổi tiếng với trí tuệ và sự thông minh, cùng những câu chuyện hài hước và giáo dục."
    },
    

//Võ thuật
69 :{
    title: "Hai Phượng",
    trailer: "https://www.youtube.com/embed/THXPCF6UHh8",
    genres: ["Võ thuật", "Hành động"],
    cast: ["Ngô Thanh Vân", "Mai Cát Vi", "Hà Việt Dũng"],
    poster: "t/vt1.jpg",
    description: "Hai Phượng, một bà mẹ đơn thân, trở thành nữ anh hùng khi chiến đấu để cứu con gái bị bắt cóc, đối mặt với thế giới ngầm tội phạm."
},
70 :{
    title: "Ma trận",
    trailer: "https://www.youtube.com/embed/l2UTOJC5Tbk",
    genres:["Võ thuật", "Hành động"],
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    poster: "t/vt2.jpg",
    description: "Neo phát hiện ra sự thật về thế giới thực và gia nhập cuộc chiến giữa loài người và máy móc trong một thực tại ảo."
},
71 :{
    title: "Diệp Vấn",
    trailer: "https://www.youtube.com/embed/RBYbqO_FUA4",
    genres: ["Võ thuật", "Hành động"],
    cast: ["Donnie Yen", "Simon Yam", "Lynn Hung"],
    poster: "t/vt3.jpg",
    description: "Câu chuyện về cuộc đời và sự nghiệp của Diệp Vấn, sư phụ của võ sư huyền thoại Bruce Lee, và những trận đấu võ thuật kinh điển."
},
72 :{
    title: "G. I. Joe: Xà nhãn báo thù",
    trailer: "https://www.youtube.com/embed/WDVxzmi8uTg",
    genres:  ["Võ thuật", "Hành động"],
    cast: ["Channing Tatum", "Bruce Willis", "Dwayne Johnson"],
    poster: "t/vt4.jpeg",
    description: "Đội đặc nhiệm G.I. Joe đối mặt với tổ chức tội phạm Xà Nhãn trong một cuộc chiến toàn cầu."
},
73 :{
    title: "Ninja Assassinm ",
    trailer: "https://www.youtube.com/embed/AcBPlzZS1mw",
    genres: ["Võ thuật", "Hành động"],
    cast: ["Rain", "Naomie Harris", "Ben Miles"],
    poster: "t/vt5.jpg",
    description: "Raizo, một ninja bị tổ chức của mình phản bội, tìm cách trả thù trong một cuộc chiến đẫm máu."
},
74 :{
    title: "Hitman X47: Kẻ săn người",
    trailer: "https://www.youtube.com/embed/zC0wpO0wgso",
    genres: ["Võ thuật", "Hành động"],
    cast: ["Timothy Olyphant", "Dougray Scott", "Olga Kurylenko"],
    poster: "t/vt6.jpg",
    description: "Hitman 47, một sát thủ được huấn luyện đặc biệt, thực hiện nhiệm vụ cuối cùng dẫn đến những tiết lộ bất ngờ về quá khứ của anh."
},
75 :{
    title: "Tân Thiếu Lâm Tự",
    trailer: "https://www.youtube.com/embed/-qPL6K7_TIQ",
    genres:["Võ thuật", "Hành động"],
    cast: ["Jackie Chan", "Wang Leehom", "Fan Bingbing"],
    poster: "t/vt7.jpg",
    description: "Những người lính Trung Quốc tìm nơi trú ẩn tại Thiếu Lâm Tự sau khi bị quân Nhật tấn công, kết hợp võ thuật với chiến đấu chống lại kẻ thù."
},
76 :{
    title: "Assassin's Creed:Sát thủ bóng đêm",
    trailer: "https://www.youtube.com/embed/n6kIYTr7yGY",
    genres: ["Võ thuật", "Hành động","Phiêu lưu"],
    cast: ["Michael Fassbender", "Marion Cotillard", "Jeremy Irons"],
    poster: "t/vt8.jpg",
    description: "Cal Lynch trải nghiệm ký ức tổ tiên qua công nghệ hiện đại, khám phá nguồn gốc của hội sát thủ và cuộc chiến chống Templar."
},

//Tình cảm 
77 :{
    title: "Bố già",
    trailer: "https://www.youtube.com/embed/jluSu8Rw6YE",
    genres: ["Tình cảm", "Hài hước"],
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
    poster: "t/tc1.jpg",
    description: "Câu chuyện về gia đình tội phạm Corleone, quyền lực, sự phản bội và truyền thống trong giới mafia Mỹ."
},
78 :{
    title: "Mai",
    trailer: "https://www.youtube.com/embed/HXWRTGbhb4U",
    genres: ["Tình cảm", "Tâm lý"],
    cast: ["Hồng Ánh", "Johnny Trí Nguyễn", "Ngọc Thanh Tâm"],
    poster: "t/tc2.jpg",
    description: "Mai, cô gái trẻ mồ côi, tìm kiếm sự thật về quá khứ và đối mặt với những thử thách trong cuộc sống."
},
79 :{
    title: "Trước Ngày Em Đến",
    trailer: "https://www.youtube.com/embed/2_tIAURgv30",
    genres: ["Tình cảm"],
    cast: ["Emilia Clarke", "Sam Claflin"],
    poster: "t/tc3.jpg",
    description: "Louisa Clark trở thành người chăm sóc Will Traynor – một chàng trai giàu có bị liệt. Dù ban đầu lạnh lùng, Will dần mở lòng và họ nảy sinh tình cảm. Tuy vậy, anh vẫn quyết định ra đi bằng cái chết êm dịu để giữ quyền tự do lựa chọn cuộc sống của mình."
},
80 :{
    title: "Cuộc Gặp Định Mệnh: Xung Đột",
    trailer: "https://www.youtube.com/embed/0ussOjmTUQU",
    genres: ["Tình cảm"],
    cast: ["Josephine Langford", "Hero Fiennes Tiffin"],
    poster: "t/tc4.png",
    description: "Tessa và Hardin tiếp tục mối quan hệ đầy sóng gió sau những hiểu lầm. Khi Tessa bắt đầu công việc mới, cả hai phải đối mặt với thử thách, ghen tuông và quá khứ đau buồn để giữ lấy tình yêu."
},
81 :{
    title: "Chuyện tình mùa đông",
    trailer: "https://www.youtube.com/embed/OYhvud6oFE0",
    genres: ["Tình cảm"],
    cast: ["Colin Farrell", "Jessica Brown Findlay", "Russell Crowe","Jennifer Connelly"],
    poster: "t/tc5.jpg",
    description: "Câu chuyện tình yêu đầy bi kịch giữa một chàng trai và cô gái trong bối cảnh mùa đông tuyết rơi."
},
82 :{
    title: "Titanic",
    trailer: "https://www.youtube.com/embed/gs5GwXOgumc",
    genres: ["Tình cảm","Tâm lý"],
    cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
    poster: "t/tc6.jpg",
    description: "Chuyện tình lãng mạn giữa Jack và Rose trên con tàu Titanic huyền thoại trước thảm họa đắm tàu."
},
83 :{
    title: "Wonderland:Xứ sở thần tiên",
    trailer: "https://www.youtube.com/embed/0ussOjmTUQU",
    genres: ["Tình cảm","Tâm lý"],
    cast: ["Bae Suzy", "Park Bo-gum", "Gong Yoo","Jung Yu-mi"],
    poster: "t/tc7.jpeg",
    description: ": Cuộc phiêu lưu của Alice khi trở lại Xứ Sở Thần Tiên, đối mặt với những thử thách và khám phá bí mật."
},



}


