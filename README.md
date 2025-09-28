# Lyra-Union: The Decentralized Cooperative

**_Rooted in Mythical Truths. Powered by Verified Trust._**

---

## 1. Overview

Lyra Union is a **decentralized cooperative** designed to solve fundamental problems in the blockchain space, including regulatory uncertainty, centralization, and "capital capture" [1, 2]. By merging the transparency of a DAO with the legal accountability of a cooperative, we are building a framework for **verifiable, real-world project execution** [3, 4].

Our primary mission is to provide a **single, immutable source of truth** for all project activities, which is especially critical in highly regulated industries like pharmaceuticals and med-tech [5, 6]. Through a partnership with Procept Partners, we are leveraging this framework to bring unprecedented transparency and compliance to processes like clinical trials, regulatory submissions, and product development [3, 7, 8].

## 2. Core Features

-   **Decentralized Cooperative Model**: Combines the strengths of a DAO with the legal compliance and accountability of a traditional cooperative [4].
-   **Three-Token Ecosystem**: A sophisticated separation of concerns between **Identity (PRISM)**, **Labor Capital (AXIS)**, and **Utility (SPARK)** [9, 10].
-   **Value-Based Governance**: A novel voting system where power is proportional not to token count, but to the **total market value of a member's contributions** (Labor + Collateral + Market Utility) [11-13].
-   **Verifiable Project Execution**: Integration with agile project management tools like **Open Project** to document every task, milestone, and deliverable immutably on the blockchain [3, 14, 15].
-   **Fair Labor Valuation**: A game-theory-based algorithm for converting hours worked into tokens, featuring a **360-degree blind peer evaluation** and a **boosted reward pool** to incentivize honest feedback [16-19].

## 3. Technology Stack

Lyra Union is built on a multi-chain architecture to use the best tool for each job:

-   **NEAR Protocol (Business Logic Layer)**: Hosts our core governance contracts. We use a customized fork of the battle-tested **SputnikDAO** framework to manage proposals and voting [22]. The **SHLD** identity NFT is also a Hedera-native token [23].
-   **Aurora (Execution Layer)**: As an EVM-compatible network, Aurora is home to our ERC-20 **FYRE** token and our dual-standard `axis`/`AXIS` (ERC-20/ERC-1400) token. This allows us to tap into the Ethereum ecosystem's tooling and liquidity [24, 25].
-   **Verus (Value & Identity Layer)**: Integrated for two critical functions:
    1.  **BTC Collateralization**: Our SPARK and AXIS tokens are backed by tBTC.
    2.  **Sovereign Identity**: Post-hackathon, the PRISM NFT will be linked to a **Verus ID**, creating a "soul-bound," cross-chain identity for members [29, 30].
-   **Open Project (Project Management)**: We integrate with this open-source agile project management tool to track and document all project work, creating an immutable on-chain record of execution [14, 31, 32].

## 4. The Three-Token Ecosystem

Our architecture is founded on a clear separation of governance, utility, and capital.

### PRISM - The Identity Token

-   **Type**: Non-transferable NFT (ERC-721 standard) on NEAR [23, 33].
-   **Purpose**: Represents a member's **identity and exclusive governance rights**. Only SHLD holders can create proposals and vote [34, 35].
-   **Mechanics**: SHLD is designed to be "soul-bound." It cannot be bought or sold, ensuring governance rights remain with verified contributors [36]. Post-hackathon, it will integrate with Verus ID for enhanced, cross-chain identity verification [29, 37].

### SPARK - The Utility Token

-   **Type**: ERC-20 token on Aurora [24, 38].
-   **Purpose**: The primary **medium of exchange** within the cooperative. Used for community rewards, staking, and purchasing SHLD tokens [24, 39].
-   **Mechanics**: FYRE exists in two states:
    1.  **Uncollateralized**: Freely transferable for general cooperative transactions [40, 41].
    2.  **Collateralized**: Backed by BTC via Verus integration. Only collateralized FYRE can be used to purchase SHLD or be contributed to the cooperative as MANA [24, 41, 42].

### AXIS - The Labor Capital Token

-   **Type**: A token with a dual lifecycle: starts as a standard **ERC-20 (`mana`)** and transitions into a restricted **ERC-1400 (`MANA`)** on Aurora [25, 43].
-   **Purpose**: Represents **contributed labor capital** and determines governance weight [44-46].
-   **Mechanics**:
    -   `axis` (ERC-20): A freely transferable token for speculative labor contributions and payments [25, 47].
    -   `AXIS` (ERC-1400): When `axis` is formally contributed to the cooperative, it becomes a restricted token with governance rights. Transfers of AXIS are overseen by the cooperative [44, 47]. A member's voting power is proportional to the total value of their MANA holdings [12, 48].

## 5. Governance Model: A Custom SputnikDAO

Our governance system is built on a customized version of **HederaioDAO** on Hedera, designed to be both decentralized and accountable [22, 49].

-   **Proposal System**: Only SHLD holders can create proposals [50]. Proposals are automatically categorized:
    -   **General Governance**: Open to voting by all SHLD holders [51].
    -   **Treasury-Related**: Handled by a delegated council of active contributors to ensure expert oversight [51, 52].
-   **Value-Based Weighted Voting**: Our system moves beyond "one token, one vote."
    -   For **general governance**, voting is uniform: one SHLD holder gets one vote [53].
    -   For **project-specific proposals**, voting power is weighted and proportional to the **total market value of a member's MANA holdings** [12, 53, 54].
-   **Cross-Chain Voting Power**: To calculate project-specific voting power, our custom **Voting/Contribution Module** on NEAR performs a cross-chain query via the **Aurora Bridge** to fetch a member's MANA balance from Aurora [55, 56].

## 6. The `axis` Hour to `AXIS` Token Conversion Algorithm

Valuing labor fairly is a cornerstone of SagaHalla. We've developed a unique, game-theory-based algorithm to convert logged work hours into `mana` tokens.

1.  **360-Degree Blind Peer Evaluation**: After a project, team members conduct **anonymous and blind** evaluations of their peers' contributions. Evaluators review standardized presentations of work, without seeing the hours logged or pay rates, to eliminate bias [17, 57, 58].
2.  **Incentivizing Honesty (The Boosted Reward Pool)**: To prevent strategic voting, **10% of the project's total MANA allocation is reserved for a reward pool**. Evaluators whose votes fall within a set confidence interval of the final average receive a share of this pool, creating a powerful incentive for accuracy [16, 18, 19].
3.  **Holistic Evaluation**: The final token allocation is also influenced by:
    -   **Stakeholder Evaluations**: Based on a formal rubric assessing quality, timeliness, and value created [59, 60].
    -   **Role-Based Multipliers**: To account for varying market rates and responsibilities [61].
    -   **Pay Rate Modifiers**: To adjust for individual negotiated rates post-evaluation [59].

## 7. Ecosystem DApps

-   **MANA Governance & Effort Tracking DApp**: A central hub for members to log hours, view MANA allocations, submit proposals, and participate in governance voting [15, 62, 63].
-   **VicTory Exchange**: A treasury-managed platform for the community to purchase FYRE, SHLD, and contribute MANA directly from the cooperative, with fees supporting ecosystem development [64, 65].

## 8. Hackathon Scope & Current Status

This repository contains the work completed during the hackathon, which includes:

-   **Smart Contracts**: Implementation of the `SPARK` (ERC-20), `AXIS` (ERC-20/1400), and `PRISM` (NEAR NFT) token contracts [66].
-   **MANA Governance System**: A DApp for contribution-weighted voting on global and project-specific proposals [48, 54].
-   **Effort Tracking System**: A DApp for logging `axis` hours against tasks and roles, with all proofs of work logged on-chain [15, 62, 67].
-   **VicTory Exchange Simulation**: A functional frontend for simulating the purchase of FYRE and SHLD, and the contribution/conversion of MANA [65, 68].

## 9. Post-Hackathon Roadmap

The journey continues after the hackathon. Our key priorities include:

-   **Full World Integration**: Linking **SHLD** to **Verus ID** for sovereign identity and moving token minting and treasury management to Verus [29, 69, 70].
-   **Mainnet Deployment**: Migrating all contracts and DApps from testnet to mainnet.
-   **Proof System Algorithm**: Finalizing the algorithmic conversion of `axis` effort hours to `axis`/`AXIS` tokens [69].
-   **Expanded DApp Functionality**: Building out developer and community portals and integrating advanced features like ML-based risk models for cash flow projections [69].

This project is licensed under the MIT License. See the `LICENSE` file for details.
