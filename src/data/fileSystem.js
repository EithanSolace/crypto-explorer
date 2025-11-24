export const fileSystemData = {
  id: "root",
  name: "此电脑",
  type: "root",
  children: [
    {
      id: "crypto-drive",
      name: "密码学补完计划 (C:)",
      type: "drive",
      children: [
        {
          id: "crypto-overview",
          name: "密码学概念总览",
          type: "file",
          content: `
\`\`\`text
密码学补完计划
├── 理论基础与模型 (Foundations & Security Models)
│   ├── 计算困难性假设 (Computational Hardness)
│   │   ├── 复杂度类 (Complexity Classes)
│   │   │   ├── P vs NP 问题 (经典计算基石)
│   │   │   └── BQP (有限误差量子多项式时间)
│   │   ├── 单向函数 (One-Way Functions, OWF)
│   │   └── 陷门置换 (Trapdoor Permutations)
│   ├── 安全性定义 (Security Definitions)
│   │   ├── 信息论安全 (Information-Theoretic Security)
│   │   │   └── 完善保密性 (Perfect Secrecy / OTP)
│   │   ├── 计算安全性 (Computational Security)
│   │   │   ├── 语义安全 (Semantic Security)
│   │   │   └── 不可区分性 (Indistinguishability)
│   │   │       ├── IND-CPA (选择明文攻击不可区分)
│   │   │       ├── IND-CCA1 (非自适应选择密文攻击)
│   │   │       └── IND-CCA2 (自适应选择密文攻击)
│   │   └── 预言机模型 (Oracle Models)
│   │       ├── 随机预言机模型 (Random Oracle Model, ROM)
│   │       └── 标准模型 (Standard Model)
│   ├── 形式化验证 (Formal Verification)
│   │   ├── 计算机辅助证明工具 (Computer-Aided Tools)
│   │       ├── Tamarin Prover (基于重写逻辑)
│   │       ├── ProVerif (基于Pi演算)
│   │       └── EasyCrypt (概率关系逻辑)
│   └── 随机性 (Randomness)
│       ├── 熵源 (Entropy Source)
│       │   ├── 物理真随机 (TRNG - 热噪声)
│       │   ├── 量子随机 (Quantum effects)
│       │   └── 物理不可克隆函数 (PUF)
│       ├── 随机数生成器 (Generators)
│       │   ├── 伪随机数生成器 (PRNG)
│       │   └── 密码学安全伪随机生成器 (CSPRNG)
│       │       ├── 前向安全性 (Forward Secrecy)
│       │       └── 回溯抗性 (Backtracking Resistance)
│       └── 基础原语 (Primitives)
│           ├── 伪随机函数 (PRF)
│           └── 伪随机置换 (PRP)
│
├── 对称密码原语 (Symmetric Primitives)
│   ├── 分组密码 (Block Ciphers)
│   │   ├── 核心结构 (Core Structures)
│   │   │   ├── SP网络 (Substitution-Permutation Network)
│   │   │   ├── Feistel 网络结构
│   │   │   └── ARX 结构 (Add-Rotate-Xor)
│   │   ├── 现代标准算法
│   │   │   ├── AES (Rijndael)
│   │   │   └── SM4 (中国国密标准)
│   │   └── 轻量级算法 (Lightweight / IoT)
│   │       ├── PRESENT
│   │       ├── GIFT
│   │       └── SKINNY
│   ├── 流密码 (Stream Ciphers)
│   │   ├── 现代软件标准
│   │   │   ├── ChaCha20
│   │   │   └── Salsa20
│   │   └── 硬件/专用标准
│   │       ├── ZUC (祖冲之算法)
│   │       ├── SNOW 3G
│   │       └── Trivium
│   └── 工作模式 (Modes of Operation)
│       ├── 认证加密 (AEAD - 推荐模式)
│       │   ├── Encrypt-then-MAC (EtM)
│       │   ├── AES-GCM
│       │   ├── AES-CCM
│       │   └── ChaCha20-Poly1305
│       ├── 抗 Nonce 误用模式 (Misuse-Resistant)
│       │   ├── AES-SIV
│       │   └── AES-GCM-SIV
│       └── 仅加密模式 (需谨慎使用)
│           ├── CTR (计数器模式)
│           └── CBC (密码分组链接)
│
├── 非对称密码原语 (Asymmetric Primitives)
│   ├── 基于大整数分解 (Integer Factorization)
│   │   ├── 素性测试与密钥生成 (Primality Testing)
│   │   ├── RSA 算法
│   │   │   ├── PKCS#1 v1.5
│   │   │   └── OAEP / PSS
│   │   ├── Paillier (加法同态)
│   │   └── Rabin
│   ├── 基于离散对数 (DLP - Finite Fields)
│   │   ├── Diffie-Hellman (DH)
│   │   ├── DSA
│   │   └── ElGamal
│   └── 椭圆曲线密码 (ECC - DLP)
│       ├── 曲线体系
│       │   ├── NIST P-curves (P-256, P-384)
│       │   ├── Bernstein Curves (Curve25519, Curve448)
│       │   └── 国密 SM2
│       ├── 核心协议
│       │   ├── ECDH / X25519
│       │   └── 签名协议 (ECDSA, EdDSA)
│       └── 基于配对 (Pairing-based)
│           ├── BLS (聚合签名)
│           └── IBE (基于身份的加密)
│
├── 数据完整性与密钥派生 (Integrity, Auth & KDF)
│   ├── 密码学哈希 (Cryptographic Hash)
│   │   ├── Merkle-Damgård 结构 (SHA-2, SM3)
│   │   ├── 海绵结构 (SHA-3, SHAKE)
│   │   └── 常见攻击 (碰撞攻击, 长度扩展攻击)
│   ├── 消息认证码 (MAC)
│   │   ├── 基于哈希 (HMAC, KMAC)
│   │   ├── 基于密码 (CMAC, GMAC)
│   │   └── 通用哈希 (Poly1305)
│   └── 密钥派生与口令哈希 (KDF & Password Hashing)
│       ├── 密钥提取与扩展 (HKDF)
│       └── 抗暴力破解/显存困难 (Argon2, scrypt, bcrypt, PBKDF2)
│
├── 后量子密码 (Post-Quantum Cryptography) [NIST 标准]
│   ├── 基于格 (Lattice-based)
│   │   ├── 密钥封装机制 (ML-KEM / Kyber)
│   │   └── 数字签名 (ML-DSA / Dilithium, FN-DSA)
│   ├── 基于哈希 (Hash-based)
│   │   ├── 无状态签名 (SLH-DSA / SPHINCS+)
│   │   └── 有状态签名 (XMSS, LMS)
│   └── 基于编码 (Code-based)
│       └── McEliece
│
├── 高级协议与隐私计算 (Advanced Protocols & Privacy)
│   ├── 高级密码组件 (Advanced Building Blocks)
│   │   ├── 承诺方案 (Commitment Schemes)
│   │   │   ├── Pedersen Commitment (基于离散对数，同态性)
│   │   │   └── Hash-based Commitment (基于哈希)
│   │   ├── 可验证随机函数 (VRF)
│   │   │   ├── EC-VRF (Algorand/Cardano 使用)
│   │   │   └── 验证特性 (Verifiability vs Pseudorandomness)
│   │   └── 累加器 (Accumulators)
│   │       ├── RSA Accumulators
│   │       └── Merkle Tree (最基础的累加器形式)
│   ├── 安全传输协议
│   │   ├── TLS 1.3
│   │   ├── QUIC
│   │   ├── Signal Protocol
│   │   └── SSH
│   ├── 零知识证明 (Zero-Knowledge Proofs)
│   │   ├── 交互式证明 (Sigma Protocols)
│   │   └── 非交互式证明 (NIZK)
│   │       ├── zk-SNARKs (Groth16, Plonk)
│   │       ├── zk-STARKs (基于哈希，抗量子)
│   │       └── Bulletproofs
│   └── 多方计算 (MPC) 与 同态加密
│       ├── 基础协议组件
│       │   └── 不经意传输 (Oblivious Transfer, OT)
│       ├── 秘密共享 (Shamir Secret Sharing)
│       ├── 混淆电路 (Yao's Protocol)
│       ├── 全同态加密 (CKKS, TFHE)
│       └── 隐私集合求交 (PSI)
│
├── 密钥管理与基础设施 (Key Management & PKI)
│   ├── 公钥基础设施 (PKI)
│   │   ├── 信任模型 (X.509, Web of Trust)
│   │   ├── 增强机制 (证书透明度)
│   │   └── 撤销机制 (CRL, OCSP, OCSP Stapling)
│   └── 密钥生命周期
│       ├── 生成与保护 (HSM, TEE, TPM)
│       ├── 交换格式 (PKCS#12, JWK)
│       └── 销毁 (Crypto-shredding)
│
└── 密码分析与攻击 (Cryptanalysis & Attacks)
    ├── 数学分析 (Mathematical)
    │   ├── 统计分析 (差分分析, 线性分析)
    │   ├── 代数攻击
    │   ├── 模运算攻击 (Coppersmith Attack)
    │   └── 量子算法攻击 (Shor, Grover)
    ├── 侧信道攻击 (Side-Channel)
    │   ├── 计时攻击
    │   ├── 功耗分析 (SPA, DPA)
    │   ├── 电磁分析
    │   ├── 缓存攻击 (Flush+Reload)
    │   └── 故障注入 (Rowhammer)
    └── 协议与实现漏洞
        ├── 填充预言机 (Padding Oracle)
        ├── 随机数重用 (Nonce Reuse)
        ├── 降级攻击 (Logjam, FREAK)
        └── 弱参数配置
\`\`\`
`,
        },
        {
          id: "foundations",
          name: "理论基础与模型 (Foundations & Security Models)",
          type: "folder",
          children: [
            {
              id: "computational-hardness",
              name: "计算困难性假设 (Computational Hardness)",
              type: "folder",
              children: [
                {
                  id: "complexity-classes",
                  name: "复杂度类 (Complexity Classes)",
                  type: "folder",
                  children: [
                    {
                      id: "p-vs-np",
                      name: "P vs NP 问题 (经典计算基石)",
                      type: "file",
                      resources: [
                        {
                          title: "P versus NP problem - Wikipedia",
                          url: "https://en.wikipedia.org/wiki/P_versus_NP_problem",
                          description: "非常全面",
                        },
                      ],
                    },
                    {
                      id: "bqp",
                      name: "BQP (有限误差量子多项式时间)",
                      type: "file",
                    },
                  ],
                },
                {
                  id: "one-way-functions",
                  name: "单向函数 (One-Way Functions, OWF)",
                  type: "file",
                },
                {
                  id: "trapdoor-permutations",
                  name: "陷门置换 (Trapdoor Permutations)",
                  type: "file",
                },
              ],
            },
            {
              id: "security-definitions",
              name: "安全性定义 (Security Definitions)",
              type: "folder",
              children: [
                {
                  id: "info-theoretic-security",
                  name: "信息论安全 (Information-Theoretic Security)",
                  type: "folder",
                  children: [
                    {
                      id: "perfect-secrecy",
                      name: "完善保密性 (Perfect Secrecy / OTP)",
                      type: "file",
                    },
                  ],
                },
                {
                  id: "computational-security",
                  name: "计算安全性 (Computational Security)",
                  type: "folder",
                  children: [
                    {
                      id: "semantic-security",
                      name: "语义安全 (Semantic Security)",
                      type: "file",
                    },
                    {
                      id: "indistinguishability",
                      name: "不可区分性 (Indistinguishability)",
                      type: "folder",
                      children: [
                        {
                          id: "ind-cpa",
                          name: "IND-CPA (选择明文攻击不可区分)",
                          type: "file",
                        },
                        {
                          id: "ind-cca1",
                          name: "IND-CCA1 (非自适应选择密文攻击)",
                          type: "file",
                        },
                        {
                          id: "ind-cca2",
                          name: "IND-CCA2 (自适应选择密文攻击)",
                          type: "file",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "oracle-models",
                  name: "预言机模型 (Oracle Models)",
                  type: "folder",
                  children: [
                    {
                      id: "random-oracle-model",
                      name: "随机预言机模型 (Random Oracle Model, ROM)",
                      type: "file",
                    },
                    {
                      id: "standard-model",
                      name: "标准模型 (Standard Model)",
                      type: "file",
                    },
                  ],
                },
              ],
            },
            {
              id: "formal-verification",
              name: "形式化验证 (Formal Verification)",
              type: "folder",
              children: [
                {
                  id: "computer-aided-tools",
                  name: "计算机辅助证明工具 (Computer-Aided Tools)",
                  type: "folder",
                  children: [
                    {
                      id: "tamarin-prover",
                      name: "Tamarin Prover (基于重写逻辑)",
                      type: "file",
                    },
                    {
                      id: "proverif",
                      name: "ProVerif (基于Pi演算)",
                      type: "file",
                    },
                    {
                      id: "easycrypt",
                      name: "EasyCrypt (概率关系逻辑)",
                      type: "file",
                    },
                  ],
                },
              ],
            },
            {
              id: "randomness",
              name: "随机性 (Randomness)",
              type: "folder",
              children: [
                {
                  id: "entropy-source",
                  name: "熵源 (Entropy Source)",
                  type: "folder",
                  children: [
                    {
                      id: "trng",
                      name: "物理真随机 (TRNG - 热噪声)",
                      type: "file",
                    },
                    {
                      id: "quantum-random",
                      name: "量子随机 (Quantum effects)",
                      type: "file",
                    },
                    { id: "puf", name: "物理不可克隆函数 (PUF)", type: "file" },
                  ],
                },
                {
                  id: "generators",
                  name: "随机数生成器 (Generators)",
                  type: "folder",
                  children: [
                    { id: "prng", name: "伪随机数生成器 (PRNG)", type: "file" },
                    {
                      id: "csprng",
                      name: "密码学安全伪随机生成器 (CSPRNG)",
                      type: "folder",
                      children: [
                        {
                          id: "forward-secrecy",
                          name: "前向安全性 (Forward Secrecy)",
                          type: "file",
                        },
                        {
                          id: "backtracking-resistance",
                          name: "回溯抗性 (Backtracking Resistance)",
                          type: "file",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "primitives",
                  name: "基础原语 (Primitives)",
                  type: "folder",
                  children: [
                    { id: "prf", name: "伪随机函数 (PRF)", type: "file" },
                    { id: "prp", name: "伪随机置换 (PRP)", type: "file" },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "symmetric-primitives",
          name: "对称密码原语 (Symmetric Primitives)",
          type: "folder",
          children: [
            {
              id: "block-ciphers",
              name: "分组密码 (Block Ciphers)",
              type: "folder",
              children: [
                {
                  id: "core-structures",
                  name: "核心结构 (Core Structures)",
                  type: "folder",
                  children: [
                    {
                      id: "sp-network",
                      name: "SP网络 (Substitution-Permutation Network)",
                      type: "file",
                    },
                    {
                      id: "feistel-network",
                      name: "Feistel 网络结构",
                      type: "file",
                    },
                    {
                      id: "arx-structure",
                      name: "ARX 结构 (Add-Rotate-Xor)",
                      type: "file",
                    },
                  ],
                },
                {
                  id: "modern-standard-algorithms",
                  name: "现代标准算法",
                  type: "folder",
                  children: [
                    { id: "aes", name: "AES (Rijndael)", type: "file" },
                    { id: "sm4", name: "SM4 (中国国密标准)", type: "file" },
                  ],
                },
                {
                  id: "lightweight-algorithms",
                  name: "轻量级算法 (Lightweight / IoT)",
                  type: "folder",
                  children: [
                    { id: "present", name: "PRESENT", type: "file" },
                    { id: "gift", name: "GIFT", type: "file" },
                    { id: "skinny", name: "SKINNY", type: "file" },
                  ],
                },
              ],
            },
            {
              id: "stream-ciphers",
              name: "流密码 (Stream Ciphers)",
              type: "folder",
              children: [
                {
                  id: "modern-software-standards",
                  name: "现代软件标准",
                  type: "folder",
                  children: [
                    { id: "chacha20", name: "ChaCha20", type: "file" },
                    { id: "salsa20", name: "Salsa20", type: "file" },
                  ],
                },
                {
                  id: "hardware-dedicated-standards",
                  name: "硬件/专用标准",
                  type: "folder",
                  children: [
                    { id: "zuc", name: "ZUC (祖冲之算法)", type: "file" },
                    { id: "snow-3g", name: "SNOW 3G", type: "file" },
                    { id: "trivium", name: "Trivium", type: "file" },
                  ],
                },
              ],
            },
            {
              id: "modes-of-operation",
              name: "工作模式 (Modes of Operation)",
              type: "folder",
              children: [
                {
                  id: "aead",
                  name: "认证加密 (AEAD - 推荐模式)",
                  type: "folder",
                  children: [
                    {
                      id: "encrypt-then-mac",
                      name: "Encrypt-then-MAC (EtM)",
                      type: "file",
                    },
                    { id: "aes-gcm", name: "AES-GCM", type: "file" },
                    { id: "aes-ccm", name: "AES-CCM", type: "file" },
                    {
                      id: "chacha20-poly1305",
                      name: "ChaCha20-Poly1305",
                      type: "file",
                    },
                  ],
                },
                {
                  id: "misuse-resistant",
                  name: "抗 Nonce 误用模式 (Misuse-Resistant)",
                  type: "folder",
                  children: [
                    { id: "aes-siv", name: "AES-SIV", type: "file" },
                    { id: "aes-gcm-siv", name: "AES-GCM-SIV", type: "file" },
                  ],
                },
                {
                  id: "encryption-only",
                  name: "仅加密模式 (需谨慎使用)",
                  type: "folder",
                  children: [
                    { id: "ctr", name: "CTR (计数器模式)", type: "file" },
                    { id: "cbc", name: "CBC (密码分组链接)", type: "file" },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "asymmetric-primitives",
          name: "非对称密码原语 (Asymmetric Primitives)",
          type: "folder",
          children: [
            {
              id: "integer-factorization",
              name: "基于大整数分解 (Integer Factorization)",
              type: "folder",
              children: [
                {
                  id: "primality-testing",
                  name: "素性测试与密钥生成 (Primality Testing)",
                  type: "file",
                },
                {
                  id: "rsa-algorithm",
                  name: "RSA 算法",
                  type: "folder",
                  children: [
                    { id: "pkcs1-v1.5", name: "PKCS#1 v1.5", type: "file" },
                    { id: "oaep-pss", name: "OAEP / PSS", type: "file" },
                  ],
                },
                { id: "paillier", name: "Paillier (加法同态)", type: "file" },
                { id: "rabin", name: "Rabin", type: "file" },
              ],
            },
            {
              id: "discrete-logarithm",
              name: "基于离散对数 (DLP - Finite Fields)",
              type: "folder",
              children: [
                {
                  id: "diffie-hellman",
                  name: "Diffie-Hellman (DH)",
                  type: "file",
                },
                { id: "dsa", name: "DSA", type: "file" },
                { id: "elgamal", name: "ElGamal", type: "file" },
              ],
            },
            {
              id: "elliptic-curve-cryptography",
              name: "椭圆曲线密码 (ECC - DLP)",
              type: "folder",
              children: [
                {
                  id: "curve-systems",
                  name: "曲线体系",
                  type: "folder",
                  children: [
                    {
                      id: "nist-p-curves",
                      name: "NIST P-curves (P-256, P-384)",
                      type: "file",
                    },
                    {
                      id: "bernstein-curves",
                      name: "Bernstein Curves (Curve25519, Curve448)",
                      type: "file",
                    },
                    { id: "sm2", name: "国密 SM2", type: "file" },
                  ],
                },
                {
                  id: "core-protocols",
                  name: "核心协议",
                  type: "folder",
                  children: [
                    { id: "ecdh-x25519", name: "ECDH / X25519", type: "file" },
                    {
                      id: "signature-protocols",
                      name: "签名协议 (ECDSA, EdDSA)",
                      type: "file",
                    },
                  ],
                },
                {
                  id: "pairing-based",
                  name: "基于配对 (Pairing-based)",
                  type: "folder",
                  children: [
                    { id: "bls", name: "BLS (聚合签名)", type: "file" },
                    { id: "ibe", name: "IBE (基于身份的加密)", type: "file" },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "integrity-auth-kdf",
          name: "数据完整性与密钥派生 (Integrity, Auth & KDF)",
          type: "folder",
          children: [
            {
              id: "cryptographic-hash",
              name: "密码学哈希 (Cryptographic Hash)",
              type: "folder",
              children: [
                {
                  id: "merkle-damgard",
                  name: "Merkle-Damgård 结构 (SHA-2, SM3)",
                  type: "file",
                },
                {
                  id: "sponge-structure",
                  name: "海绵结构 (SHA-3, SHAKE)",
                  type: "file",
                },
                {
                  id: "common-attacks",
                  name: "常见攻击 (碰撞攻击, 长度扩展攻击)",
                  type: "file",
                },
              ],
            },
            {
              id: "message-authentication-codes",
              name: "消息认证码 (MAC)",
              type: "folder",
              children: [
                {
                  id: "hash-based-mac",
                  name: "基于哈希 (HMAC, KMAC)",
                  type: "file",
                },
                {
                  id: "cipher-based-mac",
                  name: "基于密码 (CMAC, GMAC)",
                  type: "file",
                },
                {
                  id: "universal-hash",
                  name: "通用哈希 (Poly1305)",
                  type: "file",
                },
              ],
            },
            {
              id: "kdf-password-hashing",
              name: "密钥派生与口令哈希 (KDF & Password Hashing)",
              type: "folder",
              children: [
                {
                  id: "key-extraction-expansion",
                  name: "密钥提取与扩展 (HKDF)",
                  type: "file",
                },
                {
                  id: "anti-brute-force",
                  name: "抗暴力破解/显存困难 (Argon2, scrypt, bcrypt, PBKDF2)",
                  type: "file",
                },
              ],
            },
          ],
        },
        {
          id: "post-quantum-cryptography",
          name: "后量子密码 (Post-Quantum Cryptography) [NIST 标准]",
          type: "folder",
          children: [
            {
              id: "lattice-based",
              name: "基于格 (Lattice-based)",
              type: "folder",
              children: [
                {
                  id: "ml-kem",
                  name: "密钥封装机制 (ML-KEM / Kyber)",
                  type: "file",
                },
                {
                  id: "ml-dsa",
                  name: "数字签名 (ML-DSA / Dilithium, FN-DSA)",
                  type: "file",
                },
              ],
            },
            {
              id: "hash-based-pqc",
              name: "基于哈希 (Hash-based)",
              type: "folder",
              children: [
                {
                  id: "stateless-signature",
                  name: "无状态签名 (SLH-DSA / SPHINCS+)",
                  type: "file",
                },
                {
                  id: "stateful-signature",
                  name: "有状态签名 (XMSS, LMS)",
                  type: "file",
                },
              ],
            },
            {
              id: "code-based",
              name: "基于编码 (Code-based)",
              type: "folder",
              children: [{ id: "mceliece", name: "McEliece", type: "file" }],
            },
          ],
        },
        {
          id: "advanced-protocols-privacy",
          name: "高级协议与隐私计算 (Advanced Protocols & Privacy)",
          type: "folder",
          children: [
            {
              id: "advanced-building-blocks",
              name: "高级密码组件 (Advanced Building Blocks)",
              type: "folder",
              children: [
                {
                  id: "commitment-schemes",
                  name: "承诺方案 (Commitment Schemes)",
                  type: "folder",
                  children: [
                    {
                      id: "pedersen-commitment",
                      name: "Pedersen Commitment (基于离散对数，同态性)",
                      type: "file",
                    },
                    {
                      id: "hash-based-commitment",
                      name: "Hash-based Commitment (基于哈希)",
                      type: "file",
                    },
                  ],
                },
                {
                  id: "verifiable-random-functions",
                  name: "可验证随机函数 (VRF)",
                  type: "folder",
                  children: [
                    {
                      id: "ec-vrf",
                      name: "EC-VRF (Algorand/Cardano 使用)",
                      type: "file",
                    },
                    {
                      id: "verifiability-vs-pseudorandomness",
                      name: "验证特性 (Verifiability vs Pseudorandomness)",
                      type: "file",
                    },
                  ],
                },
                {
                  id: "accumulators",
                  name: "累加器 (Accumulators)",
                  type: "folder",
                  children: [
                    {
                      id: "rsa-accumulators",
                      name: "RSA Accumulators",
                      type: "file",
                    },
                    {
                      id: "merkle-tree",
                      name: "Merkle Tree (最基础的累加器形式)",
                      type: "file",
                    },
                  ],
                },
              ],
            },
            {
              id: "secure-transport-protocols",
              name: "安全传输协议",
              type: "folder",
              children: [
                { id: "tls-1.3", name: "TLS 1.3", type: "file" },
                { id: "quic", name: "QUIC", type: "file" },
                {
                  id: "signal-protocol",
                  name: "Signal Protocol",
                  type: "file",
                },
                { id: "ssh", name: "SSH", type: "file" },
              ],
            },
            {
              id: "zero-knowledge-proofs",
              name: "零知识证明 (Zero-Knowledge Proofs)",
              type: "folder",
              children: [
                {
                  id: "interactive-proofs",
                  name: "交互式证明 (Sigma Protocols)",
                  type: "file",
                },
                {
                  id: "non-interactive-proofs",
                  name: "非交互式证明 (NIZK)",
                  type: "folder",
                  children: [
                    {
                      id: "zk-snarks",
                      name: "zk-SNARKs (Groth16, Plonk)",
                      type: "file",
                    },
                    {
                      id: "zk-starks",
                      name: "zk-STARKs (基于哈希，抗量子)",
                      type: "file",
                    },
                    { id: "bulletproofs", name: "Bulletproofs", type: "file" },
                  ],
                },
              ],
            },
            {
              id: "mpc-homomorphic-encryption",
              name: "多方计算 (MPC) 与 同态加密",
              type: "folder",
              children: [
                {
                  id: "basic-protocol-components",
                  name: "基础协议组件",
                  type: "folder",
                  children: [
                    {
                      id: "oblivious-transfer",
                      name: "不经意传输 (Oblivious Transfer, OT)",
                      type: "file",
                    },
                  ],
                },
                {
                  id: "shamir-secret-sharing",
                  name: "秘密共享 (Shamir Secret Sharing)",
                  type: "file",
                },
                {
                  id: "yaos-protocol",
                  name: "混淆电路 (Yao's Protocol)",
                  type: "file",
                },
                {
                  id: "fully-homomorphic-encryption",
                  name: "全同态加密 (CKKS, TFHE)",
                  type: "file",
                },
                {
                  id: "private-set-intersection",
                  name: "隐私集合求交 (PSI)",
                  type: "file",
                },
              ],
            },
          ],
        },
        {
          id: "key-management-infrastructure",
          name: "密钥管理与基础设施 (Key Management & PKI)",
          type: "folder",
          children: [
            {
              id: "public-key-infrastructure",
              name: "公钥基础设施 (PKI)",
              type: "folder",
              children: [
                {
                  id: "trust-models",
                  name: "信任模型 (X.509, Web of Trust)",
                  type: "file",
                },
                {
                  id: "enhancement-mechanisms",
                  name: "增强机制 (证书透明度)",
                  type: "file",
                },
                {
                  id: "revocation-mechanisms",
                  name: "撤销机制 (CRL, OCSP, OCSP Stapling)",
                  type: "file",
                },
              ],
            },
            {
              id: "key-lifecycle",
              name: "密钥生命周期",
              type: "folder",
              children: [
                {
                  id: "generation-protection",
                  name: "生成与保护 (HSM, TEE, TPM)",
                  type: "file",
                },
                {
                  id: "exchange-formats",
                  name: "交换格式 (PKCS#12, JWK)",
                  type: "file",
                },
                {
                  id: "destruction",
                  name: "销毁 (Crypto-shredding)",
                  type: "file",
                },
              ],
            },
          ],
        },
        {
          id: "cryptanalysis-attacks",
          name: "密码分析与攻击 (Cryptanalysis & Attacks)",
          type: "folder",
          children: [
            {
              id: "mathematical-analysis",
              name: "数学分析 (Mathematical)",
              type: "folder",
              children: [
                {
                  id: "statistical-analysis",
                  name: "统计分析 (差分分析, 线性分析)",
                  type: "file",
                },
                { id: "algebraic-attacks", name: "代数攻击", type: "file" },
                {
                  id: "modular-arithmetic-attacks",
                  name: "模运算攻击 (Coppersmith Attack)",
                  type: "file",
                },
                {
                  id: "quantum-algorithm-attacks",
                  name: "量子算法攻击 (Shor, Grover)",
                  type: "file",
                },
              ],
            },
            {
              id: "side-channel-attacks",
              name: "侧信道攻击 (Side-Channel)",
              type: "folder",
              children: [
                { id: "timing-attacks", name: "计时攻击", type: "file" },
                {
                  id: "power-analysis",
                  name: "功耗分析 (SPA, DPA)",
                  type: "file",
                },
                {
                  id: "electromagnetic-analysis",
                  name: "电磁分析",
                  type: "file",
                },
                {
                  id: "cache-attacks",
                  name: "缓存攻击 (Flush+Reload)",
                  type: "file",
                },
                {
                  id: "fault-injection",
                  name: "故障注入 (Rowhammer)",
                  type: "file",
                },
              ],
            },
            {
              id: "protocol-implementation-vulnerabilities",
              name: "协议与实现漏洞",
              type: "folder",
              children: [
                {
                  id: "padding-oracle",
                  name: "填充预言机 (Padding Oracle)",
                  type: "file",
                },
                {
                  id: "nonce-reuse",
                  name: "随机数重用 (Nonce Reuse)",
                  type: "file",
                },
                {
                  id: "downgrade-attacks",
                  name: "降级攻击 (Logjam, FREAK)",
                  type: "file",
                },
                {
                  id: "weak-parameter-configuration",
                  name: "弱参数配置",
                  type: "file",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
