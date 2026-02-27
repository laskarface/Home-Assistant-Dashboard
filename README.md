# 🏠 Home Assistant - Premium Glassmorphism Dashboard

A state-of-the-art Home Assistant dashboard featuring a deep, immersive glassmorphism design, advanced Lovelace cards, and complex smart home logic.

> [!NOTE]
> This GitHub repository and the associated dashboard were designed and refined with the help of **Antigravity** and **Gemini**.

## 📸 Gallery

### 📱 Main Tablet Interface
| Home Overview | Full Lighting Control |
|:---:|:---:|
| ![Main](github_showcase/screen/overview_tablet_main.jpeg) | ![Lights](github_showcase/screen/overview_full_lights.png) |

### 🌍 Energy & Environment
| Energy Management | Temperatures Overview | Humidity Tracking |
|:---:|:---:|:---:|
| ![Energy](github_showcase/screen/overview_full_energy.png) | ![Temp](github_showcase/screen/overview_full_temperatures.png) | ![Humidity](github_showcase/screen/humidity_expanded.png) |

### 🚗 Devices & Technology
| Tesla Model 3 | 3D Printer (V-Minion) | NAS & Infrastructure |
|:---:|:---:|:---:|
| ![Tesla](github_showcase/screen/tesla_expanded_climate.png) | ![Printer](github_showcase/screen/printer_expanded.png) | ![NAS](github_showcase/screen/overview_full_nas.png) |

### 🗓️ Daily Life & Monitoring
| Smart Calendar | Weather Forecast | Laundry Tracking |
|:---:|:---:|:---:|
| ![Calendar](github_showcase/screen/calendar_expanded.jpeg) | ![Weather](github_showcase/screen/weather_expanded.png) | ![Laundry](github_showcase/screen/laundry_closed.png) |

### 🛡️ Security & Cameras
| External Cameras | Internal Surveillance | Garage Door |
|:---:|:---:|:---:|
| ![Ext Cam](github_showcase/screen/cameras_ext_expanded.jpeg) | ![Int Cam](github_showcase/screen/cameras_int_expanded.jpeg) | ![Garage](github_showcase/screen/pac_closed.png) |

## 🛠️ How to use this Repository

This repository follows the standard Home Assistant configuration structure. To use the components, you need to understand how they are linked:

### 1. The Core Files
- **`ui-lovelace.yaml`**: Contains the complete UI structure and the `button_card_templates`.
- **`automations.yaml`**: Over 1300 lines of logic. Many cards depend on specific automations to trigger state changes or notifications.
- **`configuration.yaml`**: Defines the sensors, input_booleans, and other entities that provide data to the dashoard.
- **`scripts.yaml`**: Contains action sequences used by the UI buttons.

### 2. Dependencies
- **Sensors**: Many custom cards (like the Energy or Tesla cards) require specific sensors to be defined in your `configuration.yaml` or via integrations.
- **Custom Components**: Check the `custom_components/` folder (to be added) for necessary HACS integrations or community plugins.
- **Assets**: All custom icons and community plugins should be placed in the `www/` folder (which maps to `/local/` in HA).

### 3. Usage
- Individual card YAML code can be found in `github_showcase/cards/`.
- Ensure you have `browser_mod`, `button-card`, and `card-mod` installed via HACS for the premium effects.

---
*Developed for the Home Assistant Community.*
