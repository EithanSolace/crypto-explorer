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
├── 理论基础 (Foundations)
│   ├── 计算困难性假设 (Computational Hardness)
│   │   ├── 复杂度类 (Complexity Classes)
│   │   │   ├── P vs NP 问题 (经典计算基石)
│   │   │   └── BQP (有限误差量子多项式时间)
│   │   ├── 单向函数 (One-Way Function, OWF)
│   │   └── 陷门函数 (Trapdoor Function, TDF)
│   ├── 安全性定义 (Security Definitions)
│   │   ├── 信息论安全 (Information-Theoretic Security)
│   │   │   └── 完美保密性 (Perfect Secrecy / OTP)
│   │   ├── 计算安全性 (Computational Security)
│   │   │   ├── 语义安全 (Semantic Security)
│   │   │   └── 不可区分性 (Indistinguishability)
│   │   │       ├── IND-CPA (选择明文攻击不可区分)
│   │   │       ├── IND-CCA1 (非自适应选择密文攻击不可区分)
│   │   │       └── IND-CCA2 (自适应选择密文攻击不可区分)
│   │   └── 神谕机模型 (Oracle Models)
│   │       ├── 标准模型 (Standard Model)
│   │       ├── 随机神谕机模型 (Random Oracle Model, ROM)
│   │       └── 量子随机神谕机模型 (Quantum Random Oracle Model, QROM)
│   ├── 随机性 (Randomness)
│   │   ├── 真随机
│   │   │   └── 熵源 (Entropy Source)
│   │   └── 伪随机
│   │       ├── 伪随机生成器 (PRG)
│   │       │   └──密码学安全伪随机数生成器 (CSPRNG)
│   │       └── 伪随机函数 (PRF)
│   └── 形式化验证 (Formal Verification)
│       └── 计算机辅助安全协议验证工具 (Computer-Aided Security Protocol Verifiers)
│           ├── ProVerif (快、全自动、适合快速验证)
│           ├── Tamarin Prover (精准、可视化好、适合复杂协议)
│           └── EasyCrypt (理论最强、难度极高、适合证明密码学原理)
│
├── 对称密码 (Symmetric)
│   ├── 分组密码 (Block Ciphers)
│   │   ├── 核心结构
│   │   │   ├── Feistel网络
│   │   │   └── SP网络 (Substitution-Permutation Network)
│   │   ├── 现代标准算法
│   │   │   ├── DES (已淘汰)
│   │   │   ├── AES (现行标准)
│   │   │   └── SM4 (中国国密标准)
│   │   └── 工作模式
│   │       ├── ECB (已淘汰)
│   │       ├── CBC (不推荐)
│   │       ├── CTR (GCM基础)
│   │       └── GCM (现行标准)
│   └── 流密码 (Stream Ciphers)
│       ├── 核心结构
│       │   ├── (N)LFSR ((non)linear-feedback shift register)
│       │   └── ARX (Add-Rotate-XOR)
│       ├── 软件专用算法
│       │   ├── RC4 (已淘汰)
│       │   └── ChaCha20 (现行标准)
│       └── 硬件专用算法
│           ├── A5/1 (已淘汰)
│           ├── Trivium (现行标准)
│           └── ZUC (现行标准)
│
├── 密码学哈希和消息认证码 (Cryptographic Hash & MAC)
│   ├── 密码学哈希 (Cryptographic Hash)
│   │   ├── 核心结构
│   │   │   ├── Merkle-Damgård 结构
│   │   │   └── Sponge function (海绵结构)
│   │   └── 现代标准算法
│   │       ├── MD5 (已淘汰)
│   │       ├── SHA-1 (已淘汰)
│   │       ├── SHA-2 (现行标准)
│   │       ├── SHA-3 (下一代标准)
│   │       └── SM3 (中国国密标准)
│   ├── 消息认证码 (MAC)
│   │   ├── HMAC
│   │   ├── CMAC
│   │   └── GMAC(硬件) & Poly1305(软件)
│   ├── 密钥派生函数 (KDF)
│   │   └── HKDF
│   └── 口令哈希 (Password Hashing)
│       ├── PBKDF2
│       └── Argon2
│
├── 非对称密码 (Asymmetric)
│   ├── 经典公钥密码
│   │   ├── 基于大数分解问题 (IFP-based)
│   │   │   ├── RSA
│   │   │   └── Paillier
│   │   ├── 基于离散对数问题 (DLP-based)
│   │   │   ├── DSA (已淘汰)
│   │   │   ├── Diffie-Hellman
│   │   │   └── ElGamal
│   │   └── 基于椭圆曲线离散对数问题 (ECDLP-based)
│   │       ├── NIST体系
│   │       │   ├── ECDSA
│   │       │   └── ECDH
│   │       ├── DJB体系
│   │       │   ├── Ed25519
│   │       │   └── X25519
│   │       └── 国密体系
│   │           └── SM2
│   └── 后量子密码 (PQC)
│       ├── 基于格 (Lattice-based)
│       │   ├── ML-KEM (Kyber)
│       │   ├── ML-DSA (Dilithium)
│       │   └── FN-DSA (Falcon)
│       ├── 基于哈希 (Hash-based)
│       │   ├── SLH-DSA (SPHINCS+)
│       │   └── XMSS & LMS
│       └── 基于编码 (Code-based)
│           └── McEliece
│
├── 高级密码协议 (Advanced Cryptographic Protocols)
│   ├── 高级密码协议组件
│   │   ├── 承诺方案 (Commitment Schemes)
│   │   ├── 秘密共享 (Secret Sharing)
│   │   ├── 不经意传输 (Oblivious Transfer)
│   │   ├── 累加器 (Accumulators)
│   │   └── 可验证随机函数 (VRF)
│   ├── 数据传输协议
│   │   ├── TLS 1.3 (SSL继任者)
│   │   ├── QUIC
│   │   ├── SSH
│   │   └── Signal Protocol
│   └── 数据计算协议 (隐私计算)
│       ├── 零知识证明 (ZKP)
│       ├── 安全多方计算 (MPC)
│       │   ├── 混淆电路 (Garbled Circuits)
│       │   ├── 隐私集合求交 (PSI)
│       │   └── 门限签名 (TSS)
│       └── 全同态加密 (FHE)
│
└── 密码分析学 (Cryptanalysis)
    ├── 数学分析攻击
    │   ├── 针对对称密码
    │   │   ├── 差分分析 (Differential Cryptanalysis)
    │   │   ├── 线性分析 (Linear Cryptanalysis)
    │   │   ├── 彩虹表与时间存储权衡 (Rainbow Tables)
    │   │   └── Grover算法
    │   └── 针对公钥密码
    │       ├── 数域筛选法 (攻击IFP&DLP)
    │       ├── BSGS & Pollard's rho (攻击ECDLP)
    │       ├── Shor算法 (攻击IFP&DLP&ECDLP)
    │       └── LLL & BKZ (攻击Lattice)
    ├── 侧信道攻击 (Side-Channel Attacks)
    │   ├── 计时攻击 (Timing Attacks)
    │   ├── 功耗分析 (Power Analysis)
    │   ├── 电磁攻击 (Electromagnetic Attack)
    │   └── 故障注入 (Fault Injection)
    └── 协议与系统漏洞攻击
        ├── 随机数重用 (Nonce Reuse)
        ├── 填充预言机攻击 (Padding Oracle Attack)
        ├── 重放攻击 (Replay Attack)
        └── 降级攻击 (Downgrade Attack)
\`\`\`
`,
        },
        {
          id: "foundations",
          name: "理论基础 (Foundations)",
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
                        {
                          title: "Cook-Levin Theorem - Wikipedia",
                          url: "https://en.wikipedia.org/wiki/Cook%E2%80%93Levin_theorem",
                          description: "经典Wikipedia起手，没啥好说的",
                        },
                        {
                          title: "Cook-Levin Theorem - Bilibili",
                          url: "https://www.bilibili.com/video/BV1NzUDBzEmr/?vd_source=4a6bef24691326e4a995c534ea99f768",
                          description: "中文视频讲解，7分钟不到",
                        },
                      ],
                    },
                    {
                      id: "bqp",
                      name: "BQP (有限误差量子多项式时间)",
                      type: "file",
                      resources: [
                        {
                          title: "Shor's algorithm - Wikipedia",
                          url: "https://en.wikipedia.org/wiki/Shor%27s_algorithm",
                          description: "有些推导是省略了，但是框架搭得很好",
                        },
                        {
                          title: "Shor's algorithm - Bilibili",
                          url: "https://www.bilibili.com/video/BV1NwS4B6Etw/?vd_source=4a6bef24691326e4a995c534ea99f768",
                          description: "中文视频讲解，全面的推导，42分钟",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "one-way-function",
                  name: "单向函数 (One-Way Function, OWF)",
                  type: "file",
                  resources: [
                    {
                      title: "one-way function - Wikipedia",
                      url: "https://en.wikipedia.org/wiki/One-way_function",
                      description: "经典Wikipedia起手，没啥好说的",
                    },
                    {
                      title: "one-way function - Bilibili",
                      url: "https://www.bilibili.com/video/BV1A82XBiEwF/?vd_source=4a6bef24691326e4a995c534ea99f768",
                      description: "中文视频讲解，前半部分是单向函数内容",
                    },
                  ],
                },
                {
                  id: "trapdoor-function",
                  name: "陷门函数 (Trapdoor Function, TDF)",
                  type: "file",
                  resources: [
                    {
                      title: "trapdoor function - Wikipedia",
                      url: "https://en.wikipedia.org/wiki/Trapdoor_function",
                      description: "经典Wikipedia起手，没啥好说的",
                    },
                    {
                      title: "trapdoor function - Bilibili",
                      url: "https://www.bilibili.com/video/BV1A82XBiEwF/?vd_source=4a6bef24691326e4a995c534ea99f768",
                      description: "中文视频讲解，后半部分是陷门函数内容",
                    },
                  ],
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
                      name: "完美保密性 (Perfect Secrecy / OTP)",
                      type: "file",
                      resources: [
                        {
                          title: "information-theoretic security - Wikipedia",
                          url: "https://en.wikipedia.org/wiki/Information-theoretic_security",
                          description: "Wikipedia讲的信息论安全",
                        },
                        {
                          title: "one-time pad - Wikipedia",
                          url: "https://en.wikipedia.org/wiki/One-time_pad",
                          description: "Wikipedia讲的一次一密one-time pad",
                        },
                        {
                          title: "Perfect Secrecy - Bilibili",
                          url: "https://www.bilibili.com/video/BV1JYmwBxEkq/?vd_source=4a6bef24691326e4a995c534ea99f768",
                          description: "中文视频讲解，五分钟",
                        },
                      ],
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
                      resources: [
                        {
                          title: "semantic security - Wikipedia",
                          url: "https://en.wikipedia.org/wiki/Semantic_security",
                          description: "Wikipedia讲的语义安全",
                        },
                        {
                          title: "有关语义安全的那张业界著名的Linux企鹅图",
                          url: "https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation",
                          description: "打开Wikipedia链接往下翻就能看到了",
                        },
                        {
                          title: "semantic security - Bilibili",
                          url: "https://www.bilibili.com/video/BV14x2CB7Emk/?vd_source=4a6bef24691326e4a995c534ea99f768",
                          description: "中文视频讲解，前半部分是语义安全",
                        },
                      ],
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
                          resources: [
                            {
                              title: "Wikipedia",
                              url: "https://en.wikipedia.org/wiki/Ciphertext_indistinguishability",
                              description: "经典Wikipedia起手，没啥好说的",
                            },
                            {
                              title: "CPA - Bilibili",
                              url: "https://www.bilibili.com/video/BV14x2CB7Emk/?vd_source=4a6bef24691326e4a995c534ea99f768",
                              description: "中文视频讲解，后半部分讲到CPA",
                            },
                          ],
                        },
                        {
                          id: "ind-cca1",
                          name: "IND-CCA1 (非自适应选择密文攻击不可区分)",
                          type: "file",
                          resources: [
                            {
                              title: "Wikipedia",
                              url: "https://en.wikipedia.org/wiki/Ciphertext_indistinguishability",
                              description: "经典Wikipedia起手，没啥好说的",
                            },
                            {
                              title: "CCA1 - Bilibili",
                              url: "https://www.bilibili.com/video/BV14x2CB7Emk/?vd_source=4a6bef24691326e4a995c534ea99f768",
                              description: "中文视频讲解，后半部分讲到CCA1",
                            },
                          ],
                        },
                        {
                          id: "ind-cca2",
                          name: "IND-CCA2 (自适应选择密文攻击不可区分)",
                          type: "file",
                          resources: [
                            {
                              title: "Wikipedia",
                              url: "https://en.wikipedia.org/wiki/Ciphertext_indistinguishability",
                              description: "经典Wikipedia起手，没啥好说的",
                            },
                            {
                              title: "CCA2 - Bilibili",
                              url: "https://www.bilibili.com/video/BV14x2CB7Emk/?vd_source=4a6bef24691326e4a995c534ea99f768",
                              description: "中文视频讲解，后半部分讲到CCA2",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "oracle-models",
                  name: "神谕机模型 (Oracle Models)",
                  type: "folder",
                  children: [
                    {
                      id: "standard-model",
                      name: "标准模型 (Standard Model)",
                      type: "file",
                      resources: [
                        {
                          title: "Standard Model - Wikipedia",
                          url: "https://en.wikipedia.org/wiki/Standard_model_(cryptography)",
                          description: "看个定义就行",
                        },
                      ],
                    },
                    {
                      id: "random-oracle-model",
                      name: "随机神谕机模型 (Random Oracle Model, ROM)",
                      type: "file",
                      resources: [
                        {
                          title: "Random Oracle - Wikipedia",
                          url: "https://en.wikipedia.org/wiki/Random_oracle",
                          description: "看个定义就行",
                        },
                      ],
                    },
                    {
                      id: "quantum-random-oracle-model",
                      name: "量子随机神谕机模型 (Quantum Random Oracle Model, QROM)",
                      type: "file",
                      resources: [
                        {
                          title:
                            "面对量子敌手的随机预言模型研究进展 - 北京邮电大学学报",
                          url: "https://www.bing.com/ck/a?!&&p=3fe3cf3a77949b159e3dbfe6160a11f09bf7c7196453827e26fa0c1d57385badJmltdHM9MTc2NTE1MjAwMA&ptn=3&ver=2&hsh=4&fclid=0d50d2e4-8212-675f-128d-c76783516619&psq=%e9%87%8f%e5%ad%90%e9%9a%8f%e6%9c%ba%e7%a5%9e%e8%b0%95%e6%9c%ba%e6%a8%a1%e5%9e%8b&u=a1aHR0cHM6Ly9qb3VybmFsLmJ1cHQuZWR1LmNuL0NOL2FydGljbGUvZG93bmxvYWRBcnRpY2xlRmlsZS5kbz9hdHRhY2hUeXBlPVBERiZpZD01MzIx",
                          description: "这是一个PDF下载链接",
                        },
                      ],
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
                  id: "random",
                  name: "真随机",
                  type: "folder",
                  children: [
                    {
                      id: "entropy-source",
                      name: "熵源 (Entropy Source)",
                      type: "file",
                      resources: [
                        {
                          title: "熵源 - Bilibili",
                          url: "https://www.bilibili.com/video/BV1C3mtBvEB5/?vd_source=4a6bef24691326e4a995c534ea99f768",
                          description: "中文视频讲解，六分钟",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "pseudorandom",
                  name: "伪随机",
                  type: "folder",
                  children: [
                    {
                      id: "prg",
                      name: "伪随机生成器 (PRG)",
                      type: "folder",
                      children: [
                        {
                          id: "csprng",
                          name: "密码学安全伪随机数生成器 (CSPRNG)",
                          type: "file",
                          resources: [
                            {
                              title: "Pseudorandom Generator - Wikipedia",
                              url: "https://en.wikipedia.org/wiki/Pseudorandom_generator",
                              description: "经典Wikipedia起手，没啥好说的",
                            },
                            {
                              title: "伪随机生成器PRG - Bilibili",
                              url: "https://www.bilibili.com/video/BV1dimuBiEgp/?vd_source=4a6bef24691326e4a995c534ea99f768",
                              description: "中文视频讲解，五分半",
                            },
                            {
                              title:
                                "Cryptographically secure pseudorandom number generator - Wikipedia",
                              url: "https://en.wikipedia.org/wiki/Cryptographically_secure_pseudorandom_number_generator",
                              description: "经典Wikipedia起手，没啥好说的",
                            },
                            {
                              title:
                                "密码学安全伪随机数生成器CSPRNG - Bilibili",
                              url: "https://www.bilibili.com/video/BV1gcmEBHEbQ/?vd_source=4a6bef24691326e4a995c534ea99f768",
                              description: "中文视频讲解，七分半",
                            },
                            {
                              title:
                                "Recommendation for Random Number Generation Using Deterministic Random Bit Generators - NIST",
                              url: "https://doi.org/10.6028/NIST.SP.800-90Ar1",
                              description:
                                "NIST的官方文档，可以找到预测抗性和回溯抗性的具体定义",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: "prf",
                      name: "伪随机函数 (PRF)",
                      type: "file",
                      resources: [
                        {
                          title: "Pseudorandom Function Family - Wikipedia",
                          url: "https://en.wikipedia.org/wiki/Pseudorandom_function_family",
                          description: "经典Wikipedia起手，没啥好说的",
                        },
                        {
                          title: "PRF - Bilibili",
                          url: "https://www.bilibili.com/video/BV11fmRB7EqP/?vd_source=4a6bef24691326e4a995c534ea99f768",
                          description: "中文视频讲解，九分半",
                        },
                      ],
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
                  id: "computer-aided-security-protocol-verifiers",
                  name: "计算机辅助安全协议验证工具 (Computer-Aided Security Protocol Verifiers)",
                  type: "folder",
                  children: [
                    {
                      id: "proverif",
                      name: "ProVerif (快、全自动、适合快速验证)",
                      type: "file",
                    },
                    {
                      id: "tamarin-prover",
                      name: "Tamarin Prover (精准、可视化好、适合复杂协议)",
                      type: "file",
                    },
                    {
                      id: "easycrypt",
                      name: "EasyCrypt (理论最强、难度极高、适合证明密码学原理)",
                      type: "file",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "symmetric-primitives",
          name: "对称密码 (Symmetric)",
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
                      id: "feistel-network",
                      name: "Feistel 网络结构",
                      type: "file",
                    },
                    {
                      id: "sp-network",
                      name: "SP网络 (Substitution-Permutation Network)",
                      type: "file",
                    },
                  ],
                },
                {
                  id: "modern-standard-algorithms",
                  name: "现代标准算法",
                  type: "folder",
                  children: [
                    { id: "des", name: "DES (已淘汰)", type: "file" },
                    { id: "aes", name: "AES (现行标准)", type: "file" },
                    { id: "sm4", name: "SM4 (中国国密标准)", type: "file" },
                  ],
                },
                {
                  id: "modes",
                  name: "工作模式",
                  type: "folder",
                  children: [
                    { id: "ecb", name: "ECB (已淘汰)", type: "file" },
                    { id: "cbc", name: "CBC (不推荐)", type: "file" },
                    { id: "ctr", name: "CTR (GCM基础)", type: "file" },
                    { id: "gcm", name: "GCM (现行标准)", type: "file" },
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
                  id: "core-structures-stream",
                  name: "核心结构",
                  type: "folder",
                  children: [
                    {
                      id: "lfsr",
                      name: "(N)LFSR ((non)linear-feedback shift register)",
                      type: "file",
                    },
                    { id: "arx", name: "ARX (Add-Rotate-XOR)", type: "file" },
                  ],
                },
                {
                  id: "software-algorithms",
                  name: "软件专用算法",
                  type: "folder",
                  children: [
                    { id: "rc4", name: "RC4 (已淘汰)", type: "file" },
                    {
                      id: "chacha20",
                      name: "ChaCha20 (现行标准)",
                      type: "file",
                    },
                  ],
                },
                {
                  id: "hardware-algorithms",
                  name: "硬件专用算法",
                  type: "folder",
                  children: [
                    { id: "a5-1", name: "A5/1 (已淘汰)", type: "file" },
                    { id: "trivium", name: "Trivium (现行标准)", type: "file" },
                    { id: "zuc", name: "ZUC (现行标准)", type: "file" },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "integrity-auth-kdf",
          name: "密码学哈希和消息认证码 (Cryptographic Hash & MAC)",
          type: "folder",
          children: [
            {
              id: "cryptographic-hash",
              name: "密码学哈希 (Cryptographic Hash)",
              type: "folder",
              children: [
                {
                  id: "core-structures-hash",
                  name: "核心结构",
                  type: "folder",
                  children: [
                    {
                      id: "merkle-damgard",
                      name: "Merkle-Damgård 结构",
                      type: "file",
                    },
                    {
                      id: "sponge-structure",
                      name: "Sponge function (海绵结构)",
                      type: "file",
                    },
                  ],
                },
                {
                  id: "modern-hash-algorithms",
                  name: "现代标准算法",
                  type: "folder",
                  children: [
                    { id: "md5", name: "MD5 (已淘汰)", type: "file" },
                    { id: "sha1", name: "SHA-1 (已淘汰)", type: "file" },
                    { id: "sha2", name: "SHA-2 (现行标准)", type: "file" },
                    { id: "sha3", name: "SHA-3 (下一代标准)", type: "file" },
                    { id: "sm3", name: "SM3 (中国国密标准)", type: "file" },
                  ],
                },
              ],
            },
            {
              id: "message-authentication-codes",
              name: "消息认证码 (MAC)",
              type: "folder",
              children: [
                { id: "hmac", name: "HMAC", type: "file" },
                { id: "cmac", name: "CMAC", type: "file" },
                {
                  id: "poly-gmac",
                  name: "GMAC(硬件) & Poly1305(软件)",
                  type: "file",
                },
              ],
            },
            {
              id: "kdf",
              name: "密钥派生函数 (KDF)",
              type: "folder",
              children: [{ id: "hkdf", name: "HKDF", type: "file" }],
            },
            {
              id: "password-hashing",
              name: "口令哈希 (Password Hashing)",
              type: "folder",
              children: [
                { id: "pbkdf2", name: "PBKDF2", type: "file" },
                { id: "argon2", name: "Argon2", type: "file" },
              ],
            },
          ],
        },
        {
          id: "asymmetric-primitives",
          name: "非对称密码 (Asymmetric)",
          type: "folder",
          children: [
            {
              id: "classical-asymmetric",
              name: "经典公钥密码",
              type: "folder",
              children: [
                {
                  id: "based-on-ifp",
                  name: "基于大数分解问题 (IFP-based)",
                  type: "folder",
                  children: [
                    { id: "rsa", name: "RSA", type: "file" },
                    { id: "paillier", name: "Paillier", type: "file" },
                  ],
                },
                {
                  id: "based-on-dlp",
                  name: "基于离散对数问题 (DLP-based)",
                  type: "folder",
                  children: [
                    { id: "dsa", name: "DSA (已淘汰)", type: "file" },
                    {
                      id: "diffie-hellman",
                      name: "Diffie-Hellman",
                      type: "file",
                    },
                    { id: "elgamal", name: "ElGamal", type: "file" },
                  ],
                },
                {
                  id: "based-on-ecdlp",
                  name: "基于椭圆曲线离散对数问题 (ECDLP-based)",
                  type: "folder",
                  children: [
                    {
                      id: "nist",
                      name: "NIST体系",
                      type: "folder",
                      children: [
                        { id: "ecdsa", name: "ECDSA", type: "file" },
                        { id: "ecdh", name: "ECDH", type: "file" },
                      ],
                    },
                    {
                      id: "djb",
                      name: "DJB体系",
                      type: "folder",
                      children: [
                        { id: "ed25519", name: "Ed25519", type: "file" },
                        { id: "x25519", name: "X25519", type: "file" },
                      ],
                    },
                    {
                      id: "sm2",
                      name: "国密体系",
                      type: "folder",
                      children: [{ id: "sm2", name: "SM2", type: "file" }],
                    },
                  ],
                },
              ],
            },
            {
              id: "post-quantum-cryptography",
              name: "后量子密码 (PQC)",
              type: "folder",
              children: [
                {
                  id: "lattice-based",
                  name: "基于格 (Lattice-based)",
                  type: "folder",
                  children: [
                    {
                      id: "ml-kem",
                      name: "ML-KEM (Kyber)",
                      type: "file",
                    },
                    {
                      id: "ml-dsa",
                      name: "ML-DSA (Dilithium)",
                      type: "file",
                    },
                    {
                      id: "fn-dsa",
                      name: "FN-DSA (Falcon)",
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
                      id: "slh-dsa",
                      name: "SLH-DSA (SPHINCS+)",
                      type: "file",
                    },
                    {
                      id: "xmss-lms",
                      name: "XMSS & LMS",
                      type: "file",
                    },
                  ],
                },
                {
                  id: "code-based",
                  name: "基于编码 (Code-based)",
                  type: "folder",
                  children: [
                    { id: "mceliece", name: "McEliece", type: "file" },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "advanced-protocols-privacy",
          name: "高级密码协议 (Advanced Cryptographic Protocols)",
          type: "folder",
          children: [
            {
              id: "advanced-building-blocks",
              name: "高级密码协议组件",
              type: "folder",
              children: [
                {
                  id: "commitment-schemes",
                  name: "承诺方案 (Commitment Schemes)",
                  type: "file",
                },
                {
                  id: "secret-sharing",
                  name: "秘密共享 (Secret Sharing)",
                  type: "file",
                },
                {
                  id: "oblivious-transfer",
                  name: "不经意传输 (Oblivious Transfer)",
                  type: "file",
                },
                {
                  id: "accumulators",
                  name: "累加器 (Accumulators)",
                  type: "file",
                },
                {
                  id: "verifiable-random-functions",
                  name: "可验证随机函数 (VRF)",
                  type: "file",
                },
              ],
            },
            {
              id: "data-transmission-protocols",
              name: "数据传输协议",
              type: "folder",
              children: [
                { id: "tls-1.3", name: "TLS 1.3 (SSL继任者)", type: "file" },
                { id: "quic", name: "QUIC", type: "file" },
                { id: "ssh", name: "SSH", type: "file" },
                {
                  id: "signal-protocol",
                  name: "Signal Protocol",
                  type: "file",
                },
              ],
            },
            {
              id: "data-computation-protocols",
              name: "数据计算协议 (隐私计算)",
              type: "folder",
              children: [
                {
                  id: "zero-knowledge-proofs",
                  name: "零知识证明 (ZKP)",
                  type: "file",
                },
                {
                  id: "secure-multiparty-computation",
                  name: "安全多方计算 (MPC)",
                  type: "folder",
                  children: [
                    {
                      id: "garbled-circuits",
                      name: "混淆电路 (Garbled Circuits)",
                      type: "file",
                    },
                    {
                      id: "private-set-intersection",
                      name: "隐私集合求交 (PSI)",
                      type: "file",
                    },
                    {
                      id: "threshold-signature-scheme",
                      name: "门限签名 (TSS)",
                      type: "file",
                    },
                  ],
                },
                {
                  id: "fully-homomorphic-encryption",
                  name: "全同态加密 (FHE)",
                  type: "file",
                },
              ],
            },
          ],
        },
        {
          id: "cryptanalysis-attacks",
          name: "密码分析学 (Cryptanalysis)",
          type: "folder",
          children: [
            {
              id: "mathematical-analysis-attacks",
              name: "数学分析攻击",
              type: "folder",
              children: [
                {
                  id: "symmetric-cryptanalysis",
                  name: "针对对称密码",
                  type: "folder",
                  children: [
                    {
                      id: "differential-cryptanalysis",
                      name: "差分分析 (Differential Cryptanalysis)",
                      type: "file",
                    },
                    {
                      id: "linear-cryptanalysis",
                      name: "线性分析 (Linear Cryptanalysis)",
                      type: "file",
                    },
                    {
                      id: "rainbow-tables",
                      name: "彩虹表与时间存储权衡 (Rainbow Tables)",
                      type: "file",
                    },
                    {
                      id: "grover-algorithm",
                      name: "Grover算法",
                      type: "file",
                    },
                  ],
                },
                {
                  id: "asymmetric-cryptanalysis",
                  name: "针对公钥密码",
                  type: "folder",
                  children: [
                    {
                      id: "number-field-sieve",
                      name: "数域筛选法 (攻击IFP&DLP)",
                      type: "file",
                    },
                    {
                      id: "bsgs-pollard-rho",
                      name: "BSGS & Pollard's rho (攻击ECDLP)",
                      type: "file",
                    },
                    {
                      id: "shor-algorithm",
                      name: "Shor算法 (攻击IFP&DLP&ECDLP)",
                      type: "file",
                    },
                    {
                      id: "lll-bkz-attack",
                      name: "LLL & BKZ (攻击Lattice)",
                      type: "file",
                    },
                  ],
                },
              ],
            },
            {
              id: "side-channel-attacks",
              name: "侧信道攻击 (Side-Channel Attacks)",
              type: "folder",
              children: [
                {
                  id: "timing-attacks",
                  name: "计时攻击 (Timing Attacks)",
                  type: "file",
                },
                {
                  id: "power-analysis",
                  name: "功耗分析 (Power Analysis)",
                  type: "file",
                },
                {
                  id: "electromagnetic-attack",
                  name: "电磁攻击 (Electromagnetic Attack)",
                  type: "file",
                },
                {
                  id: "fault-injection",
                  name: "故障注入 (Fault Injection)",
                  type: "file",
                },
              ],
            },
            {
              id: "protocol-system-vulnerabilities",
              name: "协议与系统漏洞攻击",
              type: "folder",
              children: [
                {
                  id: "nonce-reuse-attack",
                  name: "随机数重用 (Nonce Reuse)",
                  type: "file",
                },
                {
                  id: "padding-oracle-attack",
                  name: "填充预言机攻击 (Padding Oracle Attack)",
                  type: "file",
                },
                {
                  id: "replay-attack",
                  name: "重放攻击 (Replay Attack)",
                  type: "file",
                },
                {
                  id: "downgrade-attack",
                  name: "降级攻击 (Downgrade Attack)",
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
