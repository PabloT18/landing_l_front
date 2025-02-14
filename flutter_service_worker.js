'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0dd983d80a5e8228e50ad781a351ed36",
"version.json": "6d4fed07e00a8e3bdc0e96a14e1ab7c6",
"index.html": "801ec77f6eac895c8a80cc3211f4ecf3",
"/": "801ec77f6eac895c8a80cc3211f4ecf3",
"main.dart.js": "353534a79e9a2ed3846bbf13dc3614de",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "2d98848293426571b26c4e07c1b21e50",
"icons/Icon-192.png": "53a426a1b58f56372b7a9ac32438f710",
"icons/Icon-maskable-192.png": "53a426a1b58f56372b7a9ac32438f710",
"icons/favicon.png": "2d98848293426571b26c4e07c1b21e50",
"icons/Icon-maskable-512.png": "46a24a03288d5c3486ae52262e1922e6",
"icons/Icon-512.png": "46a24a03288d5c3486ae52262e1922e6",
"manifest.json": "9d60449a110ebafe949b6abd9131d996",
".git/config": "f3b63b8dff501e2419f993f563d0a8f6",
".git/objects/92/42b5e32f23fed369611f9bcea3e9394f527d11": "7f48e48ca6d564805fd8ddb37775b853",
".git/objects/92/a7be8a0a8457811cec761e006601d581d24a17": "924a43ddaab351bb282e05e7a8a8fe2c",
".git/objects/3e/6dbed1a25a4af59139a6424be016b4d6845483": "6870641315ead22963e578b102cf88a9",
".git/objects/3e/954f22930ff217e7452ee2277ff38746b82b25": "36f9755b83ce7491e8bdb996b76185d6",
".git/objects/04/94a2971286af90979420505f531f79a73ef63d": "dc8f37faec5dc4f84a4b299d2c74b3c8",
".git/objects/6a/d8c98dd811c2fa9e646f1f24aad3f466c27209": "06157ba2ba22a6aaabaa0e30ada93a8a",
".git/objects/0b/28f7ae5f8d0472b97626894bdb61a520c891da": "5fde7d30a986db7de4d2a81ec8341ab9",
".git/objects/9d/fda67b419ea14271c8c6616fc785d7dcdad1dc": "7e68d613b2aeca292b7fbe073a1d74c4",
".git/objects/9c/f9ea1fc50499660dc16cf073de3ab97fffab0b": "e19f62fec83dc95041688d6cf55e70cb",
".git/objects/bb/6d935c7ad154156e9b44b95d4656bb84f27dfe": "8454db5b9a47632a7a440d5f26e016e0",
".git/objects/d7/f3377b4ae808da23252e2648ca6deb84bbf56e": "2e0e8ddd932978871def18f5d0c424ed",
".git/objects/bd/5fdb476c5f1c92b3b2282a2658fce3953c2bee": "6c1cc987d1071b4cae8efbf04d35e5ed",
".git/objects/bc/8affa7cb059dd80d88f3b933f052a8b2ffc6d5": "c6ee3aa5d3521408123be148b5c3d6dc",
".git/objects/e5/3f6685a960ce386cf760401c0f1f1435e7d722": "eda06544361c47a48c586d4eac7ae124",
".git/objects/f4/f6621a04e8d2ec59adfe5b64dc1dadaf173271": "3fd0963955690aefd2a6737cb57763bb",
".git/objects/eb/19269b24ad59a70e88a8d68c94370d9c7c5300": "bc41df00d7557338226a51a4505cdd4a",
".git/objects/c7/71290c8346c28cb6b9ae6282f125e7e1e2f706": "13550b313068d91d9178e27c922b71ef",
".git/objects/ee/f4539eeb89505f2aad6c76c0032a2289d98664": "bdf0e275b8310aca2ab90d0c3ea9a4fe",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/883873e501fbaf9d7acd4ad42119188b246e8f": "c6e288110232abe406ad706cd63f70a2",
".git/objects/c1/0b56512e6bae0e17b7a3419938cdc538b21944": "c55874b5641d7f78d9be5e8dd34124f4",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/d218049fc3a4d4655dc068e043eca3719caa15": "ef7b0686b561539c9f05eea546b41a6b",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/4e/16c1c3f086756e23c71a39835e79bd1a4ae37d": "a01853922ead6df68d9f80d2d76205b1",
".git/objects/20/0459971b0d0b25f85b27a0f401e8f7714ff811": "9c0f2e10463515fda457505f1139e68d",
".git/objects/18/9908f1e720f2ab3e633704245d27c1882cfbec": "9bf55283168778ba8b6138072cf966ba",
".git/objects/18/cc478bd433a22a63464444defdc6a84e282047": "6a150fa99f9d9431c240b964d26bd4eb",
".git/objects/27/eef55aff8abd46bd059bca350d3c554f32f1cc": "73eae664a1fbdb8a60b6a37268866a04",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/4b/cb156791925954b33bfcc10c4772bde611529b": "d4b43412f2ae8bad133519054117e394",
".git/objects/29/8465a8aad16a63bba882e568e1a245cae033d7": "24abd9cf5fc099fcb3f0b5e951a78cab",
".git/objects/42/b55f808883ca1e41411860f9b4596d08827ec2": "383f7c39f0a7789d423ef4f63a7135eb",
".git/objects/42/e72ab2ec31f5cc80698b451f5778c1612365f8": "69d2eba412c49dd41bfad9ab3a0e2dd9",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/80/88b6952bfe31de6751aaa25bac250c8c8d13de": "7fc1992b31d8a5d2ad2c11daecfb0617",
".git/objects/7e/01cc5583c6ca6e5f7c4beba77d843e716a9931": "5e223f9763b50314ac56bc6d56d8758a",
".git/objects/19/1708cec36091a90aceb422966586656517f246": "5153482ee9487ecf9d6aca6526a7c333",
".git/objects/75/a95af89ac7ddab12ac6e37e6980adfb490d8d3": "f42c69bbb2438fd22ce5ad959f0f38fa",
".git/objects/81/861e875f51481814a1da30bc7394c5744131e0": "ddb00b806c1edf9eb840a4ecd09e9880",
".git/objects/86/fff51f53c706b29088d65c8c73eecf7dd8a552": "da818165c0807aa0f40aec232945f8dc",
".git/objects/44/31632ff8750e215d6f4ff64d3ea7ec231e3c50": "dd4615544bcbd686052d2a607a5cd56c",
".git/objects/2f/b2f9c2df5ea7031bb95efce0662b126ca1ddce": "7fd1ccc1c7778fd2c1785f927a3628a9",
".git/objects/43/98e945e08f8cad8b424382f5558789d113a477": "297b0cac2f903c333c6124cdb8d99267",
".git/objects/9f/a2277b5386f4b8ce667a1e9e2d4e8d9c8c3fea": "a9e1bb6b5d48e887f4482be013f518b5",
".git/objects/07/94da403a25e71aca698d0e90cdc80bbc31dacf": "6c6e964513238bb966b8e09f944cec09",
".git/objects/9a/7285fa3bff328ac5926bc28fa53570e0251c0e": "41dccee7fbac086f45a549a775761bdb",
".git/objects/5c/a9858976af861a6ac8e09835151ee5caf4c4f7": "5fc605632e93b3624f453e04d03e66d5",
".git/objects/5d/4208f58199732cfefcc91a459f7e27bd67984c": "a0d4928a52008b713ad940c9959478f2",
".git/objects/96/787e59b13c22aad78a286a28fa53afd3176710": "e16440bbc049601913b4b41a6012d25e",
".git/objects/53/1fc1a01f3661ad9afce50d2473c78db2c4aa97": "3f50739322a370c6d27d103c58ca9f99",
".git/objects/30/204ad0c4005acd0cb9de66db8ac6c5cf06879d": "150a15896d87a974783b3563b9813a6e",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/39/217f7303f6701991377303da6e6369096a91d1": "82ee2a745d2afd2a09042bd1348f8acc",
".git/objects/39/12e55e0b9ef5fc16a58d26d4c80103159835e3": "5218400d00d2c05e35bddabbdc68dd3a",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/63/63544b8df6b2024735e49cbc9ac52e31068576": "94388e87215d65c17533916ebc171905",
".git/objects/d3/c3cc8bee6dc15e71a5c4255a79143218aae7a9": "917864fdf03d9019bb53581c73335e30",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/24cfce5078f259bb266fe1b6a74fa64ab2bfdf": "f94e1a02ec2f27db8b94ad98238b1f86",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/d2/c9151fb60eea9a6c1a8a1940c04938b46dba94": "6e17b5d0971a0d0db064edc9a4dcbe68",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/de/56dd0d43caa533701ecf879341fd8a2fb3bdf4": "1eb09231fefd1f3c90236d398649de53",
".git/objects/a6/7430a4e9e150e2bf520b4a54590ddfdb81cf07": "3e4266811e2d2f7f41322963aa6392f6",
".git/objects/a1/b7ced5b6f0531bf0906ba334d34fff3ace045d": "00d7ad81fd9001dd3db3e458abb7e3be",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/5b79553e45bf146313ee5f06938051e2f92866": "9667657465811922c62058e69d92ff1b",
".git/objects/f9/c92f1ad4b30c285a3c820ce3529c6484a3a5f2": "c64029b376620fcb24e46580f5b11e8e",
".git/objects/f0/b6e70ec240eb5e2d4e7b1791d9fbe10b9ffec3": "16a203dd9198c97c48ccd83f3f4d2083",
".git/objects/ff/e613a987db4dbcb5c26f96a7708b49711ef521": "47a6402d69b3d244d2c8f894d9f974b2",
".git/objects/ff/2b5b62ae336df5308c28328a6ba167cd2893cc": "467cfe35d0b62dfd5f5df13917a7ac9c",
".git/objects/f6/83332604f417eded1c9fad7facb56d7d2ccdfb": "694618b94536b2d7da3e4ad444297632",
".git/objects/e7/509a98fc5f5b6a7e0a69ed3360639bc8387acd": "0bac38ccf7ae09a434fe2175e7c5abd9",
".git/objects/e7/156b22e85ceb47a110338ea6538476339ee00f": "34868ba3c1212dbc514c716b08fca024",
".git/objects/cb/1afa17be34d52468a6c90b2ec2615563598ff5": "058d8d9e8be3351f0956240ef2395db8",
".git/objects/e0/c367767ef142883d4dbbc2b5eff10ad534045b": "7398479cd336c48197e4cfda1e1d1cab",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/e92bbddf572c35562cd874054ae64bc41f4de3": "33dec0e32517cd6a27012d0b07d4125d",
".git/objects/79/76f2147366b65e2571ae367ccf03b3827aa600": "1282a30f25c977571775d6683c136bae",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/41/aa8128adf709b74a93e1434c0c49cb24718ea9": "e333adb1671bf579dadf63bd54d4b0bd",
".git/objects/48/4595104c0b1c7cc9cbf7911f46e79a0937491b": "26021a0b739c74d653dfe83b20ebe987",
".git/objects/70/bdb728d0cd5f2d0f9d8ee274ada30383dbd77c": "48887d90884b2651533eebcc7eeaa24b",
".git/objects/84/451ebe812e7f593221cb7a5bed8fb51f7d86a9": "cb708c7011a19b7a3b47e25ee7e09bae",
".git/objects/84/786a9c58e175b73d2c22a3485271215a86eb7c": "8c43d3fd928c5f579cdfc91c8a6c874d",
".git/objects/4a/c71317ba682d53597cfd7ac0c7c7dc6cca7168": "936bae8a53bcec60a42345cf9770d51a",
".git/objects/24/e8781e4e2064d2fdf5b544909d76ebf39cd6d4": "d31681c48639ab5445574bf0752f6fe9",
".git/objects/23/42ddd9ee33d62bf56d673e4cfed488fa5f0962": "832c86a75faef5a877b03b6f2cd030a1",
".git/objects/4f/1991f45cb719f5e913a327da1ac0cdf9b47dce": "a9bf4aa9e11b818047578d294204ddd2",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/ea42ce0d4251a615c7cf50b8e2b8cf1393da79": "9b9f6db70d9e2e6909bfae06c3e1d3d3",
".git/objects/40/4f33f879e56332c7211d1ff1ceda4b7656e5f6": "6e969d89e26c689e367a566ea1ac0261",
".git/objects/40/744d6d7f5a1835217b4a68f8021d86f852826a": "c01abc782c9b8fc256a878bb2c7be254",
".git/objects/47/42b2e1982e020a88954d4be5f3e871402825c8": "aae8333aa382d3ab3d0be8d27ea3b70d",
".git/objects/8b/a64bfa8605d4365880fadcc0c3087224f65139": "490bc493ba03bfdc145d39adebbe2fd3",
".git/objects/22/777c7131e454459a0f1b07fba129d7186ca624": "a38e6de8133d596de67e2334d0222eba",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "10dfc5e535f79af08fefa7fb0e9ce07c",
".git/logs/refs/heads/main": "10dfc5e535f79af08fefa7fb0e9ce07c",
".git/logs/refs/remotes/origin/main": "1063e5663f6fba00d8558c7f6962e54e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "0637e38cd1fd3b454101371b8a0609b3",
".git/refs/remotes/origin/main": "0637e38cd1fd3b454101371b8a0609b3",
".git/index": "e57fdf61505b654c977d3c7a93d0f1d8",
".git/COMMIT_EDITMSG": "eb04c11178f63e0485b8dc9359187828",
"assets/images/l_par8.jpeg": "53b4b0d7bf4719602500cfdeddbae581",
"assets/images/l_par4.jpeg": "be219a91753d92d642fc89932cf19c17",
"assets/images/l_par5.jpeg": "6947231154d0bdb2ca9ff4afb1829af6",
"assets/images/l_suma.png": "c340467a881ebb262a269292486559c6",
"assets/images/l_par2.jpeg": "2f14a1458ab3fb722df6c3b79ad4a7cb",
"assets/images/l_corazon.jpeg": "24ea8ce9d0a7091c87cc82b8e52c1e11",
"assets/images/l_par3.jpeg": "9dbcf4c77de9226ba900744d4230f643",
"assets/images/test1.jpeg": "9bb4e188581240286417187e232c4b38",
"assets/images/background.png": "0564de0c80dbcae74ffce0f6a09dc3c0",
"assets/images/test2.jpeg": "11346c7dce688552f9b834067e2120d5",
"assets/images/test3.jpeg": "74e1950d7c75cce212743bfd5a0bf432",
"assets/images/l_par1.jpeg": "74ac7ebda55de2f63ccdb6734ed8639b",
"assets/images/l_par6.jpeg": "0ebc6d386f3ea7ca53162413722d8a5c",
"assets/images/l_par7.jpeg": "583cea835c012293504f2f59069c961d",
"assets/AssetManifest.json": "bd8e03d835ddafcc1ec03de45c0da2ad",
"assets/background%20copy.mp4": "8e4f3184a835bea506ea0e4f94cf6567",
"assets/NOTICES": "697a39d764e57053eacdf9e50174fdda",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "60ba7710c8d673a1a57161467cc4055f",
"assets/background.mp4": "8e4f3184a835bea506ea0e4f94cf6567",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b0dacd6a7f778add55a36f9333a88742",
"assets/fonts/MaterialIcons-Regular.otf": "fd36a16819423120fc17ce4e8e081d88",
"assets/assets/songs/celos.mp3": "86c50e6176c14c9d6ab51ae8af023ffb",
"assets/assets/songs/cama_y_mesa.mp3": "96251a694972f5dc3cf503f6dc71a290",
"assets/assets/songs/eres_mi_persona_favorita.mp3": "5f578c9d7a7595560c293dc3697ad7bd",
"assets/assets/songs/si_nos_dejan.mp3": "51273ee5aa785a4fc2463d6b5ae11730",
"assets/assets/songs/bendita_tu_luz.mp3": "06319a1341d0c5a8b33e63227233e11c",
"assets/assets/songs/dia_tras_dia.mp3": "a4fd3143c665719f89c29f6a964effd2",
"assets/assets/songs/aprender_a_quererte.mp3": "76c1a16da811858d4fb00ec1f34ea6a8",
"assets/assets/songs/rio.mp3": "3167618cd6d79c3c4610fcfe3d370e33",
"assets/assets/songs/imaginate.mp3": "c9727f4971acbe3d6a191c62d3a6e0f7",
"assets/assets/images/l_par8.jpeg": "53b4b0d7bf4719602500cfdeddbae581",
"assets/assets/images/l_par4.jpeg": "be219a91753d92d642fc89932cf19c17",
"assets/assets/images/l_par5.jpeg": "6947231154d0bdb2ca9ff4afb1829af6",
"assets/assets/images/l_suma.png": "c340467a881ebb262a269292486559c6",
"assets/assets/images/l_par2.jpeg": "2f14a1458ab3fb722df6c3b79ad4a7cb",
"assets/assets/images/l_corazon.jpeg": "24ea8ce9d0a7091c87cc82b8e52c1e11",
"assets/assets/images/l_par3.jpeg": "9dbcf4c77de9226ba900744d4230f643",
"assets/assets/images/test1.jpeg": "9bb4e188581240286417187e232c4b38",
"assets/assets/images/background.png": "0564de0c80dbcae74ffce0f6a09dc3c0",
"assets/assets/images/test2.jpeg": "11346c7dce688552f9b834067e2120d5",
"assets/assets/images/test3.jpeg": "74e1950d7c75cce212743bfd5a0bf432",
"assets/assets/images/l_par1.jpeg": "74ac7ebda55de2f63ccdb6734ed8639b",
"assets/assets/images/l_par6.jpeg": "0ebc6d386f3ea7ca53162413722d8a5c",
"assets/assets/images/l_par7.jpeg": "583cea835c012293504f2f59069c961d",
"assets/assets/background.mp4": "8e4f3184a835bea506ea0e4f94cf6567",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
