module('lively.ide.tools.EntanglementInspector').requires().toRun(function() {
lively.BuildSpec('lively.ide.tools.EntanglementInspector', {
    _BorderColor: Color.rgb(204,0,0),
    _Extent: lively.pt(624.0,426.0),
    _Position: lively.pt(32.0,174.5),
    _StyleClassNames: ["Morph","Window"],
    cameForward: false,
    className: "lively.morphic.Window",
    collapsedExtent: lively.pt(248.0,22.0),
    collapsedPosition: lively.pt(611.0,448.0),
    collapsedTransform: {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 611,
        f: 448
    },
    contentOffset: lively.pt(3.0,22.0),
    doNotCopyProperties: [],
    doNotSerialize: [],
    draggingEnabled: true,
    droppingEnabled: false,
    expandedExtent: lively.pt(624.0,426.0),
    expandedPosition: lively.pt(105.0,333.0),
    expandedTransform: {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 105,
        f: 333
    },
    helperMorphs: "[<lively.morphic.ReframeHandle#61EB4...>,<lively.morphic.ReframeHandle#1A85E...>,<lively.morphic.ReframeHandle#593F0...>]",
    highlighted: false,
    ignoreEventsOnExpand: false,
    isCopyMorphRef: true,
    layout: {
        adjustForNewBounds: true
    },
    listListener: "AttributeConnection([object Object].createEntangledMorph --> <lively.morphic.List#0C786... - EntangledMorphsList>.addItem)",
    marshalledEntanglement: "[object Object]",
    morphList: {
        isMorphRef: true,
        name: "EntangledMorphsList"
    },
    morphRefId: 1,
    name: "Entanglement Inspector",
    searchActive: false,
    sourceModule: "lively.morphic.Widgets",
    state: "expanded",
    submorphs: [{
        _BorderColor: Color.rgb(95,94,95),
        _BorderWidth: 1,
        _Extent: lively.pt(618.0,401.0),
        _Fill: Color.rgb(204,204,204),
        _Position: lively.pt(3.0,22.0),
        className: "lively.morphic.Panel",
        doNotCopyProperties: [],
        doNotSerialize: [],
        droppingEnabled: true,
        entangledMorphsList: {
            isMorphRef: true,
            name: "EntangledMorphsList"
        },
        isCopyMorphRef: true,
        layout: {
            adjustForNewBounds: true,
            grid: lively.pt(30.9,20.1),
            resizeHeight: true,
            resizeWidth: true
        },
        morphRefId: 1,
        ownerApp: "[object Object]",
        ownerWidget: "[object Object]",
        sourceModule: "lively.morphic.MorphAddons",
        submorphs: [{
            _BorderColor: Color.rgb(189,190,192),
            _BorderRadius: 5,
            _BorderWidth: 1,
            _Extent: lively.pt(100.0,20.0),
            _Position: lively.pt(508.0,372.0),
            _StyleClassNames: ["Morph","Button"],
            className: "lively.morphic.Button",
            doNotCopyProperties: [],
            doNotSerialize: [],
            droppingEnabled: false,
            grabbingEnabled: false,
            isPressed: false,
            label: "New Morph!",
            name: "CreationButton",
            pinSpecs: [{
                accessor: "fire",
                location: 1.5,
                modality: "output",
                pinName: "fire",
                type: "Boolean"
            }],
            sourceModule: "lively.morphic.Widgets",
            toggle: false,
            value: false,
            connectionRebuilder: function connectionRebuilder() {
            lively.bindings.connect(this, "fire", this, "doAction", {});
            lively.bindings.connect(this, "fire", this.get("Entanglement Inspector"), "createEntangledObj", {});
        },
            doAction: function doAction() {
                                                    
                                                }
        },{
            _BorderColor: Color.rgb(230,230,230),
            _BorderStyle: "outset",
            _BorderWidth: 1,
            _ClipMode: {
                x: "hidden",
                y: "scroll"
            },
            _Extent: lively.pt(169.0,348.0),
            _Fill: Color.rgb(255,255,255),
            _Position: lively.pt(440.0,15.0),
            allowDeselectClick: false,
            className: "lively.morphic.List",
            doNotCopyProperties: [],
            doNotSerialize: [],
            droppingEnabled: true,
            isMultipleSelectionList: false,
            itemList: "[<lively.morphic.Image#30B00... - Image>,<lively.morphic.Image#F9469... - Image>]",
            itemMorphs: [],
            layout: {
                adjustForNewBounds: true,
                extent: lively.pt(169.0,348.0),
                listItemHeight: 19,
                maxExtent: lively.pt(169.0,348.0),
                maxListItems: 19,
                noOfCandidatesShown: 3,
                padding: 0,
                scaleHorizontal: true,
                scaleVertical: true
            },
            multipleSelectionMode: "none",
            name: "EntangledMorphsList",
            noSingleSelectionIfMultipleSelected: false,
            plug: {
                menuItems: "output",
                selection: "output",
                setList: "input"
            },
            sourceModule: "lively.morphic.Lists",
            submorphs: [{
                _BorderColor: null,
                _Extent: lively.pt(169.0,42.0),
                className: "lively.morphic.Box",
                doNotCopyProperties: [],
                doNotSerialize: [],
                droppingEnabled: true,
                halosEnabled: false,
                layout: {
                    adjustForNewBounds: true,
                    resizeWidth: true
                },
                sourceModule: "lively.morphic.Core",
                submorphs: [{
                    _ClipMode: "hidden",
                    _Extent: lively.pt(248.0,19.0),
                    _FontFamily: "Helvetica",
                    _HandStyle: "default",
                    _InputAllowed: false,
                    _Padding: lively.rect(4,2,0,0),
                    _PointerEvents: "auto",
                    _StyleClassNames: ["Morph","Text","list-item"],
                    _TextColor: Color.rgb(64,64,64),
                    _TextStylingMode: true,
                    _WhiteSpaceHandling: "pre",
                    allowInput: false,
                    className: "lively.morphic.Text",
                    doNotCopyProperties: [],
                    doNotSerialize: [],
                    draggingEnabled: true,
                    droppingEnabled: false,
                    emphasis: [[0,39,{}]],
                    evalEnabled: false,
                    eventsAreIgnored: false,
                    fixedHeight: true,
                    grabbingEnabled: false,
                    halosEnabled: false,
                    index: 0,
                    isLabel: true,
                    isListItemMorph: true,
                    layout: {
                        resizeWidth: true
                    },
                    name: "0",
                    selected: false,
                    sourceModule: "lively.morphic.TextCore",
                    submorphs: [],
                    textString: "<lively.morphic.Image#30B00... - Image>",
                    connectionRebuilder: function connectionRebuilder() {
                    lively.bindings.connect(this, "selected", this.get("EntangledMorphsList"), "selectionChanged", {updater: 
                function ($upd, selected) { $upd(this.sourceObj.index, selected); }});
                },
                    onMouseDown: function onMouseDown(evt) {
                        // NOTE! This method is attached to all the list item morphs, so this
                        // in here is NOT the list but each individual list item morph
                        var list = this.owner.owner, // FIXME
                            isMultiSelect = !!list.isMultipleSelectionList;
                        if (!isMultiSelect) {
                            this.setIsSelected(list.allowDeselectClick ? !this.selected : true);
                        } else {
                            var multiSelectWithShift = list.multipleSelectionMode === 'multiSelectWithShift',
                                hasSelection = !!list.selection,
                                shiftPressed = evt.isShiftDown();
                            if (multiSelectWithShift && !shiftPressed) {
                                var selected = this.selected;
                                list.deselectAll();
                                this.setIsSelected(!selected || !list.allowDeselectClick);
                            } else {
                                this.setIsSelected(!this.selected);
                            }
                        }
                        evt.stop(); return true;
                    },
                    setIsSelected: function setIsSelected(bool, suppressUpdate) {
                            if (!bool && this.selected) {
                                this.removeStyleClassName('selected');
                            } else if (bool && !this.selected){
                                this.addStyleClassName('selected');
                            }
                            var self = this;
                            function setState() { self.selected = bool; }
                            if (suppressUpdate) lively.bindings.noUpdate(setState); else setState();
                        }
                },{
                    _ClipMode: "hidden",
                    _Extent: lively.pt(247.0,19.0),
                    _FontFamily: "Helvetica",
                    _HandStyle: "default",
                    _InputAllowed: false,
                    _Padding: lively.rect(4,2,0,0),
                    _PointerEvents: "auto",
                    _Position: lively.pt(0.0,19.0),
                    _StyleClassNames: ["Morph","Text","list-item"],
                    _TextColor: Color.rgb(64,64,64),
                    _TextStylingMode: true,
                    _WhiteSpaceHandling: "pre",
                    allowInput: false,
                    className: "lively.morphic.Text",
                    doNotCopyProperties: [],
                    doNotSerialize: [],
                    draggingEnabled: true,
                    droppingEnabled: false,
                    emphasis: [[0,39,{}]],
                    evalEnabled: false,
                    eventsAreIgnored: false,
                    fixedHeight: true,
                    grabbingEnabled: false,
                    halosEnabled: false,
                    index: 1,
                    isLabel: true,
                    isListItemMorph: true,
                    layout: {
                        resizeWidth: true
                    },
                    name: "1",
                    selected: false,
                    sourceModule: "lively.morphic.TextCore",
                    submorphs: [],
                    textString: "<lively.morphic.Image#F9469... - Image>",
                    connectionRebuilder: function connectionRebuilder() {
                    lively.bindings.connect(this, "selected", this.get("EntangledMorphsList"), "selectionChanged", {updater: 
                function ($upd, selected) { $upd(this.sourceObj.index, selected); }});
                },
                    onMouseDown: function onMouseDown(evt) {
                        // NOTE! This method is attached to all the list item morphs, so this
                        // in here is NOT the list but each individual list item morph
                        var list = this.owner.owner, // FIXME
                            isMultiSelect = !!list.isMultipleSelectionList;
                        if (!isMultiSelect) {
                            this.setIsSelected(list.allowDeselectClick ? !this.selected : true);
                        } else {
                            var multiSelectWithShift = list.multipleSelectionMode === 'multiSelectWithShift',
                                hasSelection = !!list.selection,
                                shiftPressed = evt.isShiftDown();
                            if (multiSelectWithShift && !shiftPressed) {
                                var selected = this.selected;
                                list.deselectAll();
                                this.setIsSelected(!selected || !list.allowDeselectClick);
                            } else {
                                this.setIsSelected(!this.selected);
                            }
                        }
                        evt.stop(); return true;
                    },
                    setIsSelected: function setIsSelected(bool, suppressUpdate) {
                            if (!bool && this.selected) {
                                this.removeStyleClassName('selected');
                            } else if (bool && !this.selected){
                                this.addStyleClassName('selected');
                            }
                            var self = this;
                            function setState() { self.selected = bool; }
                            if (suppressUpdate) lively.bindings.noUpdate(setState); else setState();
                        }
                }]
            }],
            connectionRebuilder: function connectionRebuilder() {
            lively.bindings.connect(this, "selection", this.owner, "entangledMorphsListSelection", {});
            lively.bindings.connect(this, "menuItems", this.owner, "entangledMorphsListMenuItems", {});
        }
        },{
            _BorderColor: Color.rgb(153,153,153),
            _BorderWidth: 1,
            _ClipMode: "scroll",
            _Extent: lively.pt(415.0,346.0),
            _Fill: Color.rgb(255,255,255),
            _Position: lively.pt(16.0,15.0),
            className: "lively.morphic.Box",
            doNotCopyProperties: [],
            doNotSerialize: [],
            droppingEnabled: true,
            layout: {
                adjustForNewBounds: true,
                resizeWidth: false
            },
            name: "EntanglementVisualizer1",
            sourceModule: "lively.morphic.Core",
            submorphs: [{
                _Extent: lively.pt(443.0,20.0),
                _Fill: Color.rgb(255,255,255),
                _Visible: true,
                className: "lively.morphic.Tree",
                depth: 0,
                doNotCopyProperties: [],
                doNotSerialize: [],
                draggingEnabled: false,
                droppingEnabled: false,
                grabbingEnabled: false,
                isInLayoutCycle: false,
                name: "tree-view",
                searchBar: {
                    isMorphRef: true,
                    name: "SearchBar"
                },
                showMoreNode: null,
                sourceModule: "lively.morphic.Widgets",
                submorphs: [{
                    _BorderColor: null,
                    _Extent: lively.pt(443.0,20.0),
                    className: "lively.morphic.Box",
                    doNotCopyProperties: [],
                    doNotSerialize: [],
                    droppingEnabled: true,
                    eventsAreIgnored: true,
                    layout: {
                        borderSize: 0,
                        resizeWidth: true,
                        spacing: 5,
                        type: "lively.morphic.Layout.HorizontalLayout"
                    },
                    sourceModule: "lively.morphic.Core",
                    submorphs: [{
                        _Align: "right",
                        _Extent: lively.pt(10.0,20.0),
                        _FontFamily: "Helvetica",
                        _HandStyle: "default",
                        _InputAllowed: false,
                        _Padding: lively.rect(4,2,0,0),
                        _TextColor: Color.rgb(64,64,64),
                        allowInput: false,
                        className: "lively.morphic.Text",
                        doNotCopyProperties: [],
                        doNotSerialize: [],
                        draggingEnabled: false,
                        droppingEnabled: false,
                        emphasis: [[0,1,{}]],
                        evalEnabled: false,
                        fixedHeight: true,
                        fixedWidth: true,
                        grabbingEnabled: false,
                        sourceModule: "lively.morphic.TextCore",
                        submorphs: [],
                        textString: "►",
                        onMouseDown: function onMouseDown(evt) {
                                if (this.owner.owner.item.children && evt.isLeftMouseButtonDown()) {
                                    this.owner.owner.toggle();
                                }
                            }
                    },{
                        _Extent: lively.pt(88.0,20.0),
                        _FontFamily: "Helvetica",
                        _HandStyle: "default",
                        _InputAllowed: false,
                        _Padding: lively.rect(4,2,0,0),
                        _Position: lively.pt(15.0,0.0),
                        _TextColor: Color.rgb(64,64,64),
                        _WhiteSpaceHandling: "pre",
                        allowInput: false,
                        className: "lively.morphic.Text",
                        doNotCopyProperties: [],
                        doNotSerialize: [],
                        draggingEnabled: false,
                        droppingEnabled: false,
                        emphasis: [[0,12,{}]],
                        evalEnabled: false,
                        fixedHeight: true,
                        grabbingEnabled: false,
                        oldStyle: {},
                        sourceModule: "lively.morphic.TextCore",
                        submorphs: [],
                        textString: "Entanglement",
                        onMouseDown: function onMouseDown(evt) {
                                if (evt.isLeftMouseButtonDown() && this.owner.owner.item.onSelect) {
                                    this.owner.owner.getRootTree().select(this.owner.owner);
                                }
                            }
                    }]
                }],
                target: "[object Object]"
            }],
            tree: {
                isMorphRef: true,
                name: "tree-view"
            },
            marshallEntanglement: function marshallEntanglement(entanglement, name) {
                                                    var treeItems = {name: name || 'Entanglement', style: '', children: []};
                                                
                                                    // the tree should be structured as follows:
                                                    // 1. primitive properties
                                                    // 2. directly referenced subEntnaglements -> 
                                                    // 3. in a visually differentiated entry we store all the subEntanglements
                                                    //    that are not referenced directly
                                                    
                                                    // we first include the special Subentanglements attribute that we add just pro forma:
                                                    
                                                    var subEntanglementsItem =  {name: 'Subentanglements', style: '', children: [], description: ''};
                                                    var alreadyTraversed = [];
                                                    
                                                    function addTreeItemFor(attr) {
                                                        var value = entanglement.get(attr);
                                                        if(Object.isFunction(value) 
                                                            || attr.startsWith('$$')
                                                            || $.inArray(attr, ['submorphs','attributeConnections', 'doNotSerialize', 'doNotCopyProperties']) > -1)
                                                            return;
                                                        if(!value || !value.isEntanglement) {
                                                            // if this is just a primitive object, we add it to the current entanglement
                                                            var item = {name: attr, value: value, description: value && value.toString()}
                                                            treeItems.children.push(item);
                                                            // as this is a primitive object, we connect it and the variable inside the entanglement,
                                                            // to monitor all changes that happen and update this on the fly inside the view
                                                            connect(entanglement.entangledAttributes, attr, this , 'updateLabel', 
                                                                    {updater: function($proceed, oldValue, newValue) {
                                                                        $proceed(item, newValue);
                                                                    }, varMapping: {item: item}
                                                                });
                                                        } else {
                                                            // in the other case, we traverse it further
                                                            alreadyTraversed.push(value);
                                                            treeItems.children.push(this.marshallEntanglement(value, attr));
                                                        }
                                                    }
                                                    
                                                    for ( var attr in entanglement.entangledAttributes ) {
                                                        addTreeItemFor.call(this, attr);
                                                    }
                                                    
                                                    entanglement.subEntanglements.withoutAll(alreadyTraversed).forEach(function(subEnt) {
                                                       subEntanglementsItem.children.push(this.marshallEntanglement(subEnt)); 
                                                    }, this);
                                                    
                                                    if(subEntanglementsItem.children)
                                                        treeItems.children.push(subEntanglementsItem);
                                                    
                                                    return treeItems;
                                                },
            updateLabel: function updateLabel(item, value) {
                                                        // the tree generates and removes nodes dynamically with respect
                                                        // to the user interaction. We therfore need to fetch the corresponding node
                                                        // manually for this item every time something changes:
                                                        var node = this.tree.withAllTreesDetect(function(t) { return t.item == item; });
                                                        // the user might not have expanded the tree such that the item is visible
                                                        // in that case we do not have to update the entry, obviously
                                                        if(node) {
                                                            node.item.description = value && value.toString();
                                                            node.updateLabel(item);
                                                        }
                                                },
            visualize: function visualize(entanglement) {
                                                    var items = this.marshallEntanglement(entanglement);
                                                    this.tree.setItem(items);
                                                }
        },{
            _BorderColor: Color.rgb(189,190,192),
            _BorderRadius: 5,
            _BorderWidth: 1,
            _Extent: lively.pt(100.0,20.0),
            _Position: lively.pt(398.0,372.0),
            _StyleClassNames: ["Morph","Button"],
            className: "lively.morphic.Button",
            doNotCopyProperties: [],
            doNotSerialize: [],
            droppingEnabled: false,
            grabbingEnabled: false,
            isPressed: false,
            label: "Search",
            name: "CreationButton1",
            pinSpecs: [{
                accessor: "fire",
                location: 1.5,
                modality: "output",
                pinName: "fire",
                type: "Boolean"
            }],
            sourceModule: "lively.morphic.Widgets",
            toggle: false,
            value: false,
            connectionRebuilder: function connectionRebuilder() {
            lively.bindings.connect(this, "fire", this, "doAction", {});
        },
            doAction: function doAction() {
            this.owner.owner.toggleSearchBar();
        }
        }],
        aboutMe: function aboutMe() {
                            //  This is an experiment in drag-and-drop construction of
                            //  paned window apps. 
                            // 
                            //  The idea is that each widget will have a "plug" reminiscent
                            //  of Squeak's pluggable views.  From the plug, this panel
                            //  will strive to create all the necessary connections and 
                            //  stubbed methods appropriate to operation of that widget.
                            //  Gridding assistance and other style defauts will facilitate
                            //  rapid construction of pleasing practical apps.
                            //
                            //  Renaming of the widgets will be supported, but this clearly
                            //  becomes more difficult as construction progresses, since the 
                            //  stubbed methods, etc will be synchronized with the widget names.
                            // 
                            //  A further aspiration of this experiment is to automatically
                            //  generate a buildView method correponding to the concretely
                            //  constructed app.
                        },
        addMorph: function addMorph(widget) {
                            // Override addMorph to provide gridding and docking of plugs
                            $super(widget);  // momentarily install to get local bounds
                            var bnds = widget.getBounds();
                            var name = widget.getName();
                            if (!name) return widget;
                            
                            if (widget.isList) {
                                widget.remove();  // replace by our special version
                                var m = this.newListPane(bnds); }
                            else if (widget.isText) {
                                widget.remove();  // replace by our special version
                                var m = this.newCodePane(bnds); }
                            else return widget;
                            
                            m.setName(name);
                            $super(m);
                            this.plugIn(m);
                            return m;
                        },
        buildView: function buildView(extent) {  // this.buildView()
                            // Disassemble prior view if present and set extent if not null
                            this.restart(extent);
                        
                            // Lay out new widgets
                            lively.morphic.Panel.makePanedPanel(extent, [
                        		['classPane', this.newListPane, new Rectangle(0, 0, 0.5, 0.6)],
                        		['methodPane', this.newListPane, new Rectangle(0.5, 0, 0.5, 0.6)],
                        		['codePane', this.newCodePane, new Rectangle(0, 0.6, 1, 0.4)],
                        	], this);
                        
                            // Connect widgets to this panel as model
                            connect(this.classPane, "selection", this, "setSelectedClass", {});
                            connect(this.methodPane, "selection", this, "setMethodName", {});
                        
                            // Initialize this panel as model
                            this.onLoad();
                        },
        entangledMorphsListMenuItems: function entangledMorphsListMenuItems(menuItems) {
    },
        entangledMorphsListSelection: function entangledMorphsListSelection(selection) {
    },
        entangledMorphsListSetList: function entangledMorphsListSetList(setList) {
    	this.entangledMorphsList.setList(setList);
    },
        methodStubFor: function methodStubFor(widget, propName) {
                            // returns {methodName: 'nnn', methodString: 'sss'}
                            var mode = widget.plug[propName];
                            var widgetName = this.uncapitalize(widget.getName());
                            var methodName = widgetName + propName.capitalize();
                            var methodString = 'function ' + methodName + '(' + propName + ') {\n'
                            if (mode == 'input') methodString +=
                                '\tthis.' + widgetName + '.' + propName + '(' + propName + ');\n';
                            methodString += '}';
                            return {widgetName: widgetName, methodName: methodName, methodString: methodString};
                        },
        newCodePane: function newCodePane(bnds, morphorNull) {
                            // This method should be inherited for all apps
                            var codePane = morphorNull || newTextPane(bnds);
                            codePane.enableSyntaxHighlighting();
                            codePane.evalEnabled = true;
                            codePane.doSave = function() {
                                this.cachedTextString = null;
                                this.savedTextString = this.textString;
                                if (this.methodPane.selection) {
                                    alertOK('eval'); 
                                    this.tryBoundEval('this.' + panel.methodPane.selection + ' = ' + this.savedTextString)
                                }
                            }
                            codePane.applyStyle({scaleProportional: true});
                            codePane.plug = {setTextString: 'input', getTextString: 'output', menuItems: 'output'}
                            this.wrapWidget(codePane);  // Override remove to clean up stubs
                            return codePane
                        },
        newListPane: function newListPane(bnds, morphorNull) {
                            // This method should be inherited for all apps
                            var list = morphorNull || new lively.morphic.List(bnds);
                            list.applyStyle({scaleProportional: true});
                            list.plug = {setList: 'input', selection: 'output', menuItems: 'output'}
                            this.wrapWidget(list);  // Override remove to clean up stubs
                            return list;
                        },
        onLoad: function onLoad() {  // this.onLoad()
                            // Call a method here to initialize state upon loading
                        },
        plugIn: function plugIn(widget) {
                            // set up connect and stub methods based on widget.plug
                            if (!widget.plug) return;
                            var plug = widget.plug;
                            ownPropertyNames(plug).forEach(function (prop) {
                                var stub = this.methodStubFor(widget, prop);
                                //  Add method stub
                                var script = this.addScript(eval('(' + stub.methodString + ')'));
                                script.setProperty("tags", ["app methods"]);
                                //  Add connection for outputs
                                if (plug[prop] == 'output')
                                    connect(widget, prop, this, stub.methodName)
                                //  Add own variable for each widget
                                this[stub.widgetName] = widget;
                                }, this)
                        },
        renamePart: function renamePart(part, oldName, newName) {
                            // setName must be wrapped to call this
                            console.log('Renaming ' + oldName + ' to ' + newName)
                            // We will simply remove all old stubs (safely) and then install again
                        },
        reset: function reset() {  // this.reset()
                            //  Call a method to clear state for saving in parts bin
                        },
        restart: function restart(extent) {  // this.restart()
                            // Use new frame if supplied
                            extent = extent || this.getExtent();
                            this.applyStyle({adjustForNewBounds: true, fill: Color.gray});
                            this.layout.grid = this.innerBounds().extent().scaleBy(1/20);
                        
                            // Disassemble prior view and connections
                            this.removeAllMorphs();  // this should handle disconnect and unplug
                        },
        setExtent: function setExtent(newExt) {
                            var result = $super(newExt);
                            this.layout.grid = this.innerBounds().extent().scaleBy(1/20);
                            return result;
                        },
        unPlug: function unPlug(widget) {
                            // remove stub methods based on widget.plug
                            if (!widget.plug) return;
                            var plug = widget.plug;
                            ownPropertyNames(plug).forEach(function (prop) {
                                var stub = this.methodStubFor(widget, prop);
                                // remove method stubs that have not been edited
                                if (this[stub.methodName]
                                    && this[stub.methodName].toString() == stub.methodString)
                                    delete this[stub.methodName];
                                // remove connection for outputs
                                if (plug[prop] == 'output')
                                    disconnect(widget, prop, this, stub.methodName)
                                // remove own variable for widget
                                if (this[stub.widgetName]) console.log('deleting ' + stub.widgetName);
                                if (this[stub.widgetName]) delete this[stub.widgetName];
                                }, this)
                        },
        uncapitalize: function uncapitalize(name) {
                            // By symmetry with <string>.capitalize()
                            return name.charAt(0).toLowerCase() + name.slice(1);
                        },
        wrapWidget: function wrapWidget(widget) {
                            // Clean up stubs when a widget is removed or renamed
                            var self = this;
                            widget.remove = widget.remove.wrap(
                                function(wrapped) {
                                    var args = $A(arguments); args.shift();
                                    if (this.owner !== self)
                                        return wrapped.apply(this, args);
                                    self.unPlug(this);
                                    this.remove = wrapped;  // restore remove
                                    return wrapped.apply(this, args);
                                });
                            widget.setName = widget.setName.wrap(
                                function(wrapped) {
                                    var args = $A(arguments); args.shift();
                                    if (this.owner !== self || !this.getName())
                                        return wrapped.apply(this, args);
                                    self.unPlug(this);
                                    var result = wrapped.apply(this, args);
                                    self.plugIn(this);
                                    return result;
                                });
                        },
        yetToDo: function yetToDo() {
                        //  [X] Write code to intercept addMorph()
                        //  [X]     gridding
                        //  [X]     other defaults such as layout, borders, etc
                        //  [X]     define plugs for, eg, list and text
                        //  [X]     add stub methods for plugs
                        //  [X]     add connections for outputs
                        //  [X] Remove stubs when remove parts
                        //  [X] Make safeRemove that checks for unchanged stubs
                        //  [X] Remove connections when remove parts
                        //  [X] Support renaming of parts by safeRemove, followed by add
                        //  [X] Add and remove own variable refs
                        //  [X] Test by building a browser
                        //  [ ] Write code that will generate buildView method
                        }
    }],
    titleBar: "Entanglement Inspector",
    tree: {
        isMorphRef: true,
        name: "tree-view"
    },
    withoutLayers: "[GrabbingLayer]",
    createEntangledObj: function createEntangledObj() {
    // Something to think about: How to supply the user with an interface for
    // excluding specific interfaces?
    var m = this.entanglement.createEntangledMorph({excludes: ['setPosition']});
    m.setPosition(pt(0));
    m.openInHand();
},
    marshallEntanglement: function marshallEntanglement(entanglement, name) {
    var treeItems = {name: name || 'Entanglement', 
                     style: {}, 
                     children: [],
                     mapsTo: function(obj) { return treeItems == obj }};

    // the tree should be structured as follows:
    // 1. primitive properties
    // 2. directly referenced subEntnaglements -> 
    // 3. in a visually differentiated entry we store all the subEntanglements
    //    that are not referenced directly
    
    // we first include the special Subentanglements attribute that we add just pro forma:
    
    var subEntanglementsItem =  {name: 'Subentanglements', style: '', children: [], description: ''};
    var alreadyTraversed = [];
    
    function addTreeItemFor(attr) {
        var value = entanglement.get(attr);
        if(Object.isFunction(value) 
            || attr.startsWith('$$')
            || $.inArray(attr, ['submorphs','attributeConnections', 'doNotSerialize', 'doNotCopyProperties']) > -1)
            return;
        if(!value || !value.isEntanglement) {
            // if this is just a primitive object, we add it to the current entanglement
            var item = {name: attr, 
                        value: value, 
                        description: value && value.toString(),
                        mapsTo: function(obj) { return item == obj; }
                        }
            treeItems.children.push(item);
            // as this is a primitive object, we connect it and the variable inside the entanglement,
            // to monitor all changes that happen and update this on the fly inside the view
            connect(entanglement.entangledAttributes, attr, this , 'updateLabel', 
                    {updater: function($proceed, oldValue, newValue) {
                        $proceed(item, newValue);
                    }, varMapping: {item: item}
                });
        } else {
            // in the other case, we traverse it further
            alreadyTraversed.push(value);
            treeItems.children.push(this.marshallEntanglement(value, attr));
        }
    }
    
    for ( var attr in entanglement.entangledAttributes ) {
        addTreeItemFor.call(this, attr);
    }
    
    entanglement.subEntanglements.withoutAll(alreadyTraversed).forEach(function(subEnt) {
       subEntanglementsItem.children.push(this.marshallEntanglement(subEnt)); 
    }, this);
    
    if(subEntanglementsItem.children.length > 0)
        treeItems.children.push(subEntanglementsItem);
    
    return treeItems;
},
    toggleSearchBar: function toggleSearchBar() {
    if(this.searchActive) {
        this.tree.exitSearch();
        this.searchActive = false;
    } else {
        this.tree.createSearchBar(this.marshalledEntanglement, 'Searching...');
        this.searchActive = true;
    }
},
    updateLabel: function updateLabel(item, value) {
        // the tree generates and removes nodes dynamically with respect
        // to the user interaction. We therfore need to fetch the corresponding node
        // manually for this item every time something changes:
        var node = this.tree.withAllTreesDetect(function(t) { return t.item.mapsTo(item) });
        // the user might not have expanded the tree such that the item is visible
        // in that case we do not have to update the entry, obviously
        if(node) {
            node.item.description = value && value.toString();
            node.updateLabel(item);
        }
},
    visualize: function visualize(entanglement) {
    this.marshalledEntanglement = this.marshallEntanglement(entanglement);
    this.entanglement = entanglement;
    this.tree.setItem(this.marshalledEntanglement);
    this.ListListener && this.listListener.disconnect();
    this.morphList.getList().forEach(
        function(i) { this.morphList.removeItemOrValue(i); }, 
        this);
    entanglement.entangledMorphs.forEach(
        function(morph) { this.morphList.addItem(morph) }, this );
        
    // also setup a connection with the list of entangled morphs,
    // so that we always find out about new morphs that are added
    this.listListener = connect(this.entanglement, 'createEntangledMorph', this.morphList, 'addItem', {updater: function($proceed, newV, oldV) { $proceed(newV); return newV; }});
    connect(this.entanglement.entangledMorphs, 'remove', this.morphList, 'removeItem');
}
})
})
