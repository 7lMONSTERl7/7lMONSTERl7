{
    const script = document.createElement('script');
    script.textContent = `{
      document.currentScript.dataset.injected = true;
      const o = JSON.parse(decodeURIComponent(escape(atob('eyJ1c2VyQWdlbnQiOiJNb3ppbGxhLzUuMCAoTGludXg7IEFuZHJvaWQgOTsgUHJpbW8gSDggUHJvKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTA3LjAuMC4wIE1vYmlsZSBTYWZhcmkvNTM3LjM2IiwiYXBwVmVyc2lvbiI6IjUuMCAoTGludXg7IEFuZHJvaWQgOTsgUHJpbW8gSDggUHJvKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTA3LjAuMC4wIE1vYmlsZSBTYWZhcmkvNTM3LjM2IiwicGxhdGZvcm0iOiJBbmRyb2lkIiwidmVuZG9yIjoiR29vZ2xlIEluYy4iLCJwcm9kdWN0IjoiR2Vja28iLCJvc2NwdSI6IltkZWxldGVdIiwiYnVpbGRJRCI6IltkZWxldGVdIiwicHJvZHVjdFN1YiI6IjIwMDMwMTA3IiwidXNlckFnZW50RGF0YUJ1aWxkZXIiOnsicCI6eyJ1YSI6Ik1vemlsbGEvNS4wIChMaW51eDsgQW5kcm9pZCA5OyBQcmltbyBIOCBQcm8pIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMDcuMC4wLjAgTW9iaWxlIFNhZmFyaS81MzcuMzYiLCJicm93c2VyIjp7Im5hbWUiOiJDaHJvbWUiLCJ2ZXJzaW9uIjoiMTA3LjAuMC4wIiwibWFqb3IiOiIxMDcifSwiZW5naW5lIjp7Im5hbWUiOiJCbGluayIsInZlcnNpb24iOiIxMDcuMC4wLjAifSwib3MiOnsibmFtZSI6IkFuZHJvaWQiLCJ2ZXJzaW9uIjoiOSJ9LCJkZXZpY2UiOnsibW9kZWwiOiJQcmltbyBIOCBQcm8iLCJ0eXBlIjoibW9iaWxlIn0sImNwdSI6e319LCJ1YSI6Ik1vemlsbGEvNS4wIChMaW51eDsgQW5kcm9pZCA5OyBQcmltbyBIOCBQcm8pIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMDcuMC4wLjAgTW9iaWxlIFNhZmFyaS81MzcuMzYifX0='))));

      if (o.userAgentDataBuilder) {
        const v = new class NavigatorUAData {
          #p;

          constructor({p, ua}) {
            this.#p = p;

            const version = p.browser.major;
            const name = p.browser.name === 'Chrome' ? 'Google Chrome' : p.browser.name;

            this.brands = [{
              brand: name,
              version
            }, {
              brand: 'Chromium',
              version
            }, {
              brand: 'Not=A?Brand',
              version: '24'
            }];

            this.mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);

            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Platform
            this.platform = 'Unknown';
            if (p.os && p.os.name) {
              const name = p.os.name.toLowerCase();
              if (name.includes('mac')) {
                this.platform = 'macOS';
              }
              else if (name.includes('debian')) {
                this.platform = 'Linux';
              }
              else {
                this.platform = p.os.name;
              }
            }
          }
          toJSON() {
            return {
              brands: this.brands,
              mobile: this.mobile,
              platform: this.platform
            };
          }
          getHighEntropyValues(hints) {
            if (!hints || Array.isArray(hints) === false) {
              return Promise.reject(Error("Failed to execute 'getHighEntropyValues' on 'NavigatorUAData'"));
            }

            const r = this.toJSON();

            if (hints.includes('architecture')) {
              r.architecture = this.#p?.cpu?.architecture || 'x86';
            }
            if (hints.includes('bitness')) {
              r.bitness = '64';
            }
            if (hints.includes('model')) {
              r.model = '';
            }
            if (hints.includes('platformVersion')) {
              r.platformVersion = this.#p?.os?.version || '10.0.0';
            }
            if (hints.includes('uaFullVersion')) {
              r.uaFullVersion = this.brands[0].version;
            }
            if (hints.includes('fullVersionList')) {
              r.fullVersionList = this.brands;
            }
            return Promise.resolve(r);
          }
        }(o.userAgentDataBuilder);

        navigator.__defineGetter__('userAgentData', () => {
          return v;
        });
      }
      delete o.userAgentDataBuilder;

      for (const key of Object.keys(o)) {
        if (o[key] === '[delete]') {
          delete Object.getPrototypeOf(window.navigator)[key];
        }
        else {
          navigator.__defineGetter__(key, () => {
            if (o[key] === 'empty') {
              return '';
            }
            return o[key];
          });
        }
      }
    }`;
    document.documentElement.appendChild(script);
    if (script.dataset.injected !== 'true') {
      const s = document.createElement('script');
      s.src = 'data:text/javascript;charset=utf-8;base64,' + btoa(script.textContent);
      document.documentElement.appendChild(s);
      s.remove();
    }
    script.remove();
  }