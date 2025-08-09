## GitHub Copilot Chat

- Extension Version: 0.29.1 (prod)
- VS Code: vscode/1.102.3
- OS: Windows

## Network

User Settings:
```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 20.207.73.85 (3 ms)
- DNS ipv6 Lookup: Error (2 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (14 ms)
- Electron fetch (configured): HTTP 200 (257 ms)
- Node.js https: HTTP 200 (165 ms)
- Node.js fetch: HTTP 200 (164 ms)

Connecting to https://api.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.114.22 (42 ms)
- DNS ipv6 Lookup: Error (7 ms): getaddrinfo ENOTFOUND api.githubcopilot.com
- Proxy URL: None (8 ms)
- Electron fetch (configured): HTTP 200 (837 ms)
- Node.js https: HTTP 200 (853 ms)
- Node.js fetch: HTTP 200 (891 ms)

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).