import React from 'react';
import values from 'lodash/values';
import PropTypes from 'prop-types';

import TreeNode from './TreeNode';

const data = {
  '/root': {
    path: '/root',
    type: 'folder',
    isRoot: true,
    children: ['/root/branch-1', '/root/branch-2'],
  },
  '/root/branch-1': {
    path: '/root/branch-1',
    type: 'folder',
    children: ['/root/branch-1/readme.md'],
  },
  '/root/branch-1/readme.md': {
    path: '/root/branch-1/readme.md',
    type: 'file',
    content: 'Thanks for reading me me. But there is nothing here.'
  },
  '/root/branch-2': {
    path: '/root/branch-2',
    type: 'folder',
    children: ['/root/branch-2/projects', '/root/branch-2/vblogs'],
  },
  '/root/branch-2/projects': {
    path: '/root/branch-2/projects',
    type: 'folder',
    children: ['/root/branch-2/projects/treeview'],
  },
  '/root/branch-2/projects/treeview': {
    path: '/root/branch-2/projects/treeview',
    type: 'folder',
    children: [],
  },
  '/root/branch-2/vblogs': {
    path: '/root/branch-2/vblogs',
    type: 'folder',
    children: [],
  },
};

export default class Tree extends React.Component {

  state = {
    nodes: data,
  };

  getRootNodes = () => {
    const { nodes } = this.state;
    return values(nodes).filter(node => node.isRoot === true);
  }

  getChildNodes = (node) => {
    const { nodes } = this.state;
    if (!node.children) return [];
    return node.children.map(path => nodes[path]);
  }  

  onToggle = (node) => {
    const { nodes } = this.state;
    nodes[node.path].isOpen = !node.isOpen;
    this.setState({ nodes });
  }

  onNodeSelect = node => {
    const { onSelect } = this.props;
    onSelect(node);
  }

  render() {
    const rootNodes = this.getRootNodes();
    return (
      <div>
        { rootNodes.map(node => (
          <TreeNode 
            node={node}
            getChildNodes={this.getChildNodes}
            onToggle={this.onToggle}
            onNodeSelect={this.onNodeSelect}
          />
        ))}
      </div>
    )
  }
}

Tree.propTypes = {
  onSelect: PropTypes.func.isRequired,
};