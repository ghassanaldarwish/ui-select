import*as e from"react";import{CaretSortIcon as t,CheckIcon as a}from"@radix-ui/react-icons";import*as r from"@radix-ui/react-select";import{cn as o}from"@wds-utilities/cn";var n=function(){return n=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};function s(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(a[r[o]]=e[r[o]])}return a}"function"==typeof SuppressedError&&SuppressedError;var l=r.Root,i=r.Group,d=r.Value,c=e.forwardRef((function(t,a){return e.createElement(r.Icon,n({ref:a},t))})),m=e.forwardRef((function(a,l){var i=a.className,d=a.children,m=s(a,["className","children"]);return e.createElement(r.Trigger,n({ref:l,className:o("flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",i)},m),d,e.createElement(c,{asChild:!0},e.createElement(t,{className:"h-4 w-4 opacity-50"})))}));m.displayName=r.Trigger.displayName;var p=e.forwardRef((function(t,a){return e.createElement(r.Viewport,n({ref:a},t))})),f=e.forwardRef((function(t,a){var l=t.className,i=t.children,d=t.position,c=void 0===d?"popper":d,m=s(t,["className","children","position"]);return e.createElement(r.Portal,null,e.createElement(r.Content,n({ref:a,className:o("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===c&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",l),position:c},m),e.createElement(p,{className:o("p-1","popper"===c&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")},i)))}));f.displayName=r.Content.displayName;var u=e.forwardRef((function(t,a){var l=t.className,i=s(t,["className"]);return e.createElement(r.Label,n({ref:a,className:o("px-2 py-1.5 text-sm font-semibold",l)},i))}));u.displayName=r.Label.displayName;var y=e.forwardRef((function(t,l){var i=t.className,d=t.children,c=s(t,["className","children"]);return e.createElement(r.Item,n({ref:l,className:o("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",i)},c),e.createElement("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center"},e.createElement(r.ItemIndicator,null,e.createElement(a,{className:"h-4 w-4"}))),e.createElement(r.ItemText,null,d))}));y.displayName=r.Item.displayName;var g=e.forwardRef((function(t,a){var l=t.className,i=s(t,["className"]);return e.createElement(r.Separator,n({ref:a,className:o("-mx-1 my-1 h-px bg-muted",l)},i))}));g.displayName=r.Separator.displayName;export{l as Select,f as SelectContent,i as SelectGroup,y as SelectItem,u as SelectLabel,g as SelectSeparator,m as SelectTrigger,d as SelectValue};
//# sourceMappingURL=index.js.map