# Contracts

A Foundry starter project for smart contract development.

## Setup

Install Foundry:
```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

Install dependencies:
```bash
forge install
```

## Usage

### Build
```bash
forge build
```

### Test
```bash
forge test
```

### Deploy
```bash
forge script script/Deploy.s.sol:DeployScript --rpc-url <RPC_URL> --broadcast
```

## Project Structure

- `src/` - Smart contract source files
- `test/` - Test files
- `script/` - Deployment scripts
