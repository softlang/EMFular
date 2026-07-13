# EMFular

**EMFular** is a client-side, Angular-based framework for building EMF-consistent web editors. It preserves EMF's structural semantics (containment, opposites, reference integrity) entirely in the browser, without requiring any backend infrastructure, and remains extensible through idiomatic Angular development practices.

A companion project, the [EMFular-Generator](https://github.com/softlang/EMFular-Generator), produces fully functional, customizable editor projects directly from Ecore metamodels.

## Megamodel

This repository hosts the four packages that together make up the EMFular megamodel. Following the reference architecture for GLSP-based web modeling tools, functionality is split into three independent layers — **Core**, **Diagram**, and **Tool** — plus the **Integration** layer that assembles them into ready-to-use editor components.

![EMFular megamodel](emfular_megamodel.png)

Each of the three layer packages has no cross-dependencies and can be used independently, in any TypeScript-based stack. `emfular-integration` is the only package that depends on all of the others, combining them into a complete, customizable editor shell.

### `EMFular-Core`

Provides EMF-style model semantics as a pure TypeScript library, usable in any JS/TS environment (Angular, React, Node.js, etc.):

- Exposes models as plain TypeScript objects with typed attributes and references, backed internally by transparent proxies.
- Enforces EMF reference semantics — containment, bidirectional opposites, and deletion cascades — while keeping the object graph well-formed.
- Persists and loads models using EMF-Jackson, EMF's native JSON serialization format, enabling direct interoperability with existing EMF workflows.

See the [core README](./projects/core/README.md) for details.

### `EMFular-Diagram`

Provides SVG-based Angular components for building graphical editors:

- Defines graphical identity and position for elements, with a lightweight notification mechanism for movement events.
- Ships reusable SVG components, a two-layer dragging mechanism, and adaptive connectors that update automatically as connected elements move.

See the [diagram README](./projects/diagram/README.md) for details.

### `EMFular-Tool`

Provides generic, model-agnostic editing utilities for canvas-based editors:

- File I/O for loading and saving JSON models and exporting canvas content as SVG, PNG, or JPEG.
- A lightweight history mechanism (circular buffer, persisted in `localStorage`) enabling undo/redo and session recovery, independent of the stored model's structure.

See the [tool README](./projects/tool/README.md) for details.


### `EMFular-Integration`

Assembles `EMFular-Core`, `EMFular-Diagram`, and `EMFular-Tool` into ready-to-use, model-agnostic editor components:

- An extensible editor shell with a file-level toolbar (load, save, export, undo/redo), a central SVG canvas with a projection slot for model-specific visualizations, and an optional model-editing bar for domain-specific actions.
- A stateful model-management service that supplies the current model instance, integrates the history mechanism, and exposes an API for creating, loading, and saving models.
- Default, model-agnostic components for containment-based tree editors, including a detail view for inspecting and editing attributes and relationships.

See the [integration README](./projects/integration/README.md) for details.


## Getting Started

Each package can be installed independently depending on which layers you need. Installing ngx-emfular-integration alone will also pull in emfular-core, ngx-emfular-diagram, and ngx-emfular-tool as dependencies:

```
npm install emfular-core
npm install ngx-emfular-diagram
npm install ngx-emfular-tool
npm install ngx-emfular-integration
```

To generate a complete, customizable editor project from an Ecore metamodel, use the [EMFular-Generator](https://github.com/softlang/EMFular-Generator), which can also be [tried out directly in the browser](https://softlang.github.io/EMFular-Generator).

## Learn More

- [EMFular-Generator](https://github.com/softlang/EMFular-Generator) — generates editor projects from `.ecore` files
- Live demo: [BasicFamily editor](https://emfular-demos.github.io/basicfamily-ge/) with source at [emfular-demos/basicfamily-ge](https://github.com/emfular-demos/basicfamily-ge)


